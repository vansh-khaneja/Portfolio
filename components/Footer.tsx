interface FooterProps {
  personalData: {
    name: string;
  };
}

export default function Footer({ personalData }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

