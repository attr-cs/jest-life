import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";

interface FeedbackFormProps {
  onSubmitSuccess?: () => void;
}

const FeedbackForm = ({ onSubmitSuccess }: FeedbackFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Feedback submitted successfully!",
        description: "Thank you for sharing your experience with us.",
      });
      // Reset form using the native form reset
      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
      if (onSubmitSuccess) onSubmitSuccess();
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="feedback-name">Full Name</Label>
            <Input
              id="feedback-name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback-email">Email</Label>
            <Input
              id="feedback-email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="feedback-phone">Phone Number</Label>
            <Input
              id="feedback-phone"
              name="phone"
              placeholder="Your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback-institution">School/Institution</Label>
            <Input
              id="feedback-institution"
              name="institution"
              placeholder="Your school or organization"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating">Rate Your Experience</Label>
          <Select>
            <SelectTrigger id="rating">
              <SelectValue placeholder="Select a rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">★★★★★ Excellent</SelectItem>
              <SelectItem value="4">★★★★☆ Very Good</SelectItem>
              <SelectItem value="3">★★★☆☆ Good</SelectItem>
              <SelectItem value="2">★★☆☆☆ Fair</SelectItem>
              <SelectItem value="1">★☆☆☆☆ Poor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="feedback-message">Your Testimonial</Label>
          <Textarea
            id="feedback-message"
            name="message"
            placeholder="Share your experience with our seminars"
            rows={5}
            required
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Star className="h-4 w-4 text-yellow-400" />
          <p>Your testimonial may be featured on our website (with your permission)</p>
        </div>

        <Button type="submit" className="w-full hover:scale-105 transition-transform" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Testimonial"}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
