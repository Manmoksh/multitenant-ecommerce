export const Footer = () => {
  return (
    <footer className="border-t p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <p className="font-semibold">funroad, Inc.</p>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/terms" className="hover:underline transition-colors">
            Terms
          </a>
          <a href="/privacy" className="hover:underline transition-colors">
            Privacy
          </a>
          <a
            href="https://twitter.com/funroad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
