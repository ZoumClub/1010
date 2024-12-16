import { z } from "zod";
import { SERVICE_ICONS } from "@/lib/constants/services";

export const serviceSchema = z.object({
  name: z.enum(Object.keys(SERVICE_ICONS) as [string, ...string[]]),
  price: z.number().positive("Price must be greater than 0"),
  description: z.string().min(1, "Description is required"),
  image_url: z.string().url("Please enter a valid image URL"),
});

export type ServiceFormData = z.infer<typeof serviceSchema>;