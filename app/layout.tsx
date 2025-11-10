import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'What is an AI Agent? | Agentic-6ca108eb',
  description:
    'Clear explanation of AI agents: definition, components, workflows, examples, and limitations.',
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://agentic-6ca108eb.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
        <footer className="footer">Made for the prompt ? deployable on Vercel</footer>
      </body>
    </html>
  );
}
