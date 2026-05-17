import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // React development mode already surfaces render errors in the console overlay.
    // Avoid logging user data or noisy production diagnostics here.
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <section className="page-section bg-axon-dark text-white" aria-label={this.props.name ?? "Seccion no disponible"}>
            <div className="container-shell rounded-xl border border-white/10 bg-white/[0.035] p-6 text-sm leading-7 text-[#A8B2C4]">
              No pudimos cargar esta seccion. El resto del sitio sigue disponible.
            </div>
          </section>
        )
      );
    }

    return this.props.children;
  }
}
