/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ReactNode } from 'react';
import { RotateCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  override state: State = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in KOI POND BALI SERVICES app:', error, errorInfo);
  }

  private handleReload = () => {
    try {
      localStorage.removeItem('koi_pond_lang');
    } catch {
      // ignore
    }
    window.location.href = '/';
  };

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#04242E] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#062C38]/90 border border-teal-500/30 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FF5722]/20 border border-[#FF5722]/40 flex items-center justify-center text-[#FF6E40]">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
                KOI POND BALI SERVICES
              </h2>
              <p className="text-sm text-teal-100/80 leading-relaxed">
                Terjadi kendala saat memuat halaman. Silakan klik tombol di bawah untuk memuat ulang sistem.
              </p>
            </div>

            <button
              onClick={this.handleReload}
              className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF6E40] text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <RotateCw className="w-4 h-4 animate-spin" />
              <span>Muat Ulang Halaman</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
