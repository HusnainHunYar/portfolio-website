'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-foreground mb-4">Oops!</h1>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Something went wrong
        </h2>
        <p className="text-muted-foreground mb-8">
          We encountered an unexpected error while loading the page. This could
          be a temporary issue.
        </p>
        <div className="space-y-4">
          <Button onClick={reset} size="lg" className="w-full">
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
            size="lg"
            className="w-full"
          >
            Go Home
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-muted-foreground">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 p-4 bg-muted rounded text-xs overflow-auto max-h-40">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
