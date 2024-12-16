"use client";

import { Service } from "@/types/service";
import { 
  Wrench, 
  Car, 
  Shield, 
  PaintBucket,
  Gauge,
  Battery,
  Oil,
  Sparkles
} from "lucide-react";

// Map service names to Lucide icons
export const SERVICE_ICONS = {
  "Oil Change": Oil,
  "Car Inspection": Car,
  "Paint Service": PaintBucket,
  "Brake Service": Gauge,
  "Battery Service": Battery,
  "Engine Tune-up": Wrench,
  "Car Detailing": Sparkles,
  "Insurance": Shield,
} as const;

export type ServiceName = keyof typeof SERVICE_ICONS;

// Function to get icon component for a service
export function getServiceIcon(name: string) {
  return SERVICE_ICONS[name as ServiceName] || Car;
}