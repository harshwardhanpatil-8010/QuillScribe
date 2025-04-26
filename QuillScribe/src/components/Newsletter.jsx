import { Button } from "./ui/button";
import { Input } from "./ui/input";


const Newsletter = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-4">Stay in the loop</h2>
          <p className="text-gray-600 mb-8">
            Get the latest posts delivered right to your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
