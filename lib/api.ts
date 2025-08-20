import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Contact API functions
export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData: {
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    subject?: string;
    message?: string;
  }) => {
    const response = await api.post("/contact", contactData);
    return response.data;
  },
}
// Newsletter API functions
export const newsletterAPI = {
  // Subscribe to newsletter
  subscribe: async (email: string, source?: string) => {
    const response = await api.post("/newsletter/subscribe", { email, source });
    return response.data;
  },

  // Unsubscribe from newsletter
  unsubscribe: async (email: string) => {
    const response = await api.post("/newsletter/unsubscribe", { email });
    return response.data;
  },
}
// Welcome Popup API functions
export const welcomePopupAPI = {
  // Submit welcome popup form
  submitForm: async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    cellNumber: string;
    promotionalUpdates: boolean;
    agreeToTerms: boolean;
  }) => {
    const response = await api.post("/welcome-popup/submit", formData);
    return response.data;
  },

  // Get user details by email
  getUserDetails: async (email: string) => {
    const response = await api.get(`/welcome-popup/details/${encodeURIComponent(email)}`);
    return response.data;
  },
}

// Volunteer API functions
export const volunteerAPI = {
  // Submit volunteer application
  submitApplication: async (volunteerData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
    };
    dateOfBirth: string;
    emergencyContact?: {
      name?: string;
      relationship?: string;
      phone?: string;
    };
    availability: string;
    interests: string[];
    experience: string;
    motivation: string;
  }) => {
    const response = await api.post("/volunteer/submit", volunteerData);
    return response.data;
  },
};

// Donation API functions
export const donationAPI = {
  // Create Stripe Checkout session
  createCheckoutSession: async (donationData: {
    donorName: string;
    email: string;
    phone?: string;
    amount: number;
    donationType: 'one-time' | 'monthly';
    paymentMethod?: string;
    designation?: string;
    isAnonymous?: boolean;
    message?: string;
  }) => {
    const response = await api.post("/donation/create-checkout-session", donationData);
    return response.data;
  },

  // Get donation status
  getDonationStatus: async (donationId: string) => {
    const response = await api.get(`/donation/status/${donationId}`);
    return response.data;
  },
};
// Export the base api instance for custom requests
export default api;
