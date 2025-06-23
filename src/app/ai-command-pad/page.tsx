"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SparklesIcon, MicIcon } from "lucide-react";
import AICommandPadTopBar from "@/polymet/components/ai-command-pad-top-bar";
import ContextSummaryAreaEnhanced from "@/polymet/components/context-summary-area-enhanced";
import ActionButtonAreaEnhanced from "@/polymet/components/action-button-area-enhanced";
import { ContextItem } from "@/polymet/components/context-summary-item";
import QuickActionsHub from "@/polymet/components/quick-actions-hub";
import AIPlannerModuleHandlerEnhanced from "@/polymet/components/ai-planner-module-handler-enhanced";
import BusinessPlanningMenu from "@/polymet/components/business-planning-menu";
import TypewriterPlaceholder from "@/polymet/components/typewriter-placeholder";
import QuoteFoundationSection from "@/polymet/components/quote-foundation-section";
import QuoteServicesSection from "@/polymet/components/quote-services-section";
import QuoteMaterialsSection from "@/polymet/components/quote-materials-section";
import QuotePricingSection from "@/polymet/components/quote-pricing-section";
import QuoteTermsSection from "@/polymet/components/quote-terms-section";
import QuoteReviewSection from "@/polymet/components/quote-review-section";
import {
  PlannerModuleType,
  PlannerStage,
} from "@/polymet/components/ai-planner-module-handler";

type ViewState =
  | "initial"
  | "business-planning-menu"
  | "business-planning-module"
  | "quote-foundation"
  | "quote-services"
  | "quote-materials"
  | "quote-pricing"
  | "quote-terms"
  | "quote-review"
  | PlannerStage;

type BusinessPlanningSubModule =
  | "pricing-strategy"
  | "monthly-goals"
  | "performance-review"
  | null;

interface ClientData {
  id: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
}

export default function AICommandPadPage() {
  const router = useRouter();
  const [viewState, setViewState] = useState<ViewState>("initial");
  const [goalInputText, setGoalInputText] = useState("");
  const [contextItems, setContextItems] = useState<ContextItem[]>([]);
  const [activeModule, setActiveModule] = useState<PlannerModuleType>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [businessPlanningSubModule, setBusinessPlanningSubModule] =
    useState<BusinessPlanningSubModule>(null);
  const [businessPlanningTitle, setBusinessPlanningTitle] =
    useState<string>("");
  const userName = "John";

  const [selectedClient, setSelectedClient] = useState<ClientData | null>(null);
  const [projectTitle, setProjectTitle] = useState("");
  const [linkedJobId, setLinkedJobId] = useState<string | undefined>(undefined);
  const [quoteServices, setQuoteServices] = useState<any[]>([]);
  const [quoteMaterials, setQuoteMaterials] = useState<any[]>([]);
  const [quotePricing, setQuotePricing] = useState<any>({
    subtotal: 0,
    discountType: "percentage",
    discountValue: "",
    discountAmount: 0,
    applyTax: true,
    taxRate: 20,
    taxAmount: 0,
    total: 0,
  });
  const [quoteTerms, setQuoteTerms] = useState<any>({
    terms: "",
    validityPeriod: "",
    notes: "",
  });

  const placeholderPhrases = [
    "Describe your goal (e.g., 'Create a new job for plumbing repair...')",
    "e.g., 'Help me draft a quote for the Millers'",
    "e.g., 'Plan my social media for next week'",
    "e.g., 'Set up a new client onboarding workflow'",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleGoalSubmit = () => {
    if (goalInputText.trim() === "") return;

    setActiveModule("create-job");
    setViewState("goal-input");
  };

  const handleQuickActionSelect = (actionId: string) => {
    const moduleMap: Record<string, PlannerModuleType> = {
      "create-job": "create-job",
      "draft-quote": "draft-quote",
      "message-composer": "message-composer",
      "onboard-client": "onboard-client",
      "marketing-content": "marketing-content",
      "generate-invoice": "draft-quote",
      "customer-issue-resolver": "message-composer",
    };

    if (actionId === "business-planning") {
      setActiveModule("business-planning");
      setViewState("business-planning-menu");
      setContextItems([
        {
          id: "business-planning",
          label: "Selected Assistant",
          value: "Business Planning",
        },
      ]);
      return;
    }

    if (actionId === "draft-quote") {
      setActiveModule("draft-quote");
      setViewState("quote-foundation");
      setContextItems([
        {
          id: "quote-goal",
          label: "Current Goal",
          value: "Draft Smart Quote",
        },
        {
          id: "quote-client",
          label: "Client",
          value: "Not selected",
        },
        {
          id: "quote-project",
          label: "Project",
          value: "Not defined",
        },
      ]);
      return;
    }

    const moduleType = moduleMap[actionId];
    if (moduleType) {
      setActiveModule(moduleType);
      setViewState("goal-input");
    }
  };

  const handleBusinessPlanningSubModuleSelect = (
    subModule: string,
    title: string
  ) => {
    setBusinessPlanningSubModule(subModule as BusinessPlanningSubModule);
    setBusinessPlanningTitle(title);
    setViewState("business-planning-module");
    setContextItems([
      {
        id: "business-planning",
        label: "Current Goal",
        value: title,
      },
    ]);
  };

  const handleBack = () => {
    if (viewState === "initial") {
      router.back();
    } else if (viewState === "business-planning-menu") {
      setViewState("initial");
      setActiveModule(null);
      setContextItems([]);
      setBusinessPlanningSubModule(null);
    } else if (viewState === "business-planning-module") {
      setViewState("business-planning-menu");
      setContextItems([
        {
          id: "business-planning",
          label: "Selected Assistant",
          value: "Business Planning",
        },
      ]);
      setBusinessPlanningSubModule(null);
    } else if (viewState === "quote-foundation") {
      setViewState("initial");
      setActiveModule(null);
      setContextItems([]);
      resetQuoteState();
    } else if (viewState === "quote-services") {
      setViewState("quote-foundation");
    } else if (viewState === "quote-materials") {
      setViewState("quote-services");
    } else if (viewState === "quote-pricing") {
      setViewState("quote-materials");
    } else if (viewState === "quote-terms") {
      setViewState("quote-pricing");
    } else if (viewState === "quote-review") {
      setViewState("quote-terms");
    } else {
      setViewState("initial");
      setActiveModule(null);
      setContextItems([]);
      setGoalInputText("");
      setActiveTopic(null);
      resetQuoteState();
    }
  };

  const handleCancel = () => {
    setViewState("initial");
    setActiveModule(null);
    setContextItems([]);
    setGoalInputText("");
    setActiveTopic(null);
    setBusinessPlanningSubModule(null);
    resetQuoteState();
  };

  const resetQuoteState = () => {
    setSelectedClient(null);
    setProjectTitle("");
    setLinkedJobId(undefined);
    setQuoteServices([]);
    setQuoteMaterials([]);
    setQuotePricing({
      subtotal: 0,
      discountType: "percentage",
      discountValue: "",
      discountAmount: 0,
      applyTax: true,
      taxRate: 20,
      taxAmount: 0,
      total: 0,
    });
    setQuoteTerms({
      terms: "",
      validityPeriod: "",
      notes: "",
    });
  };

  const handleContextUpdate = (items: ContextItem[]) => {
    setContextItems(items);
  };

  const handleStageChange = (newStage: PlannerStage) => {
    setViewState(newStage);

    if (newStage === "topic-detailing") {
      const clientTopicItems = contextItems.filter(
        (item) =>
          item.id === "client-name" ||
          item.id === "client-phone" ||
          item.id === "client-email" ||
          item.id === "client-address" ||
          item.id.startsWith("client-note-")
      );

      if (clientTopicItems.length > 0) {
        setActiveTopic("client");
      }
    }
  };

  const handleClientUpdate = (client: ClientData | null) => {
    setSelectedClient(client);

    if (client) {
      setContextItems((prevItems) => {
        const newItems = prevItems.filter((item) => item.id !== "quote-client");
        return [
          ...newItems,
          {
            id: "quote-client",
            label: "Client",
            value: client.name,
          },
        ];
      });
    }
  };

  const handleProjectUpdate = (title: string, jobId?: string) => {
    setProjectTitle(title);
    setLinkedJobId(jobId);

    if (title) {
      setContextItems((prevItems) => {
        const newItems = prevItems.filter(
          (item) =>
            item.id !== "quote-project" && item.id !== "quote-project-type"
        );

        const projectItems = [
          {
            id: "quote-project",
            label: "Project",
            value: title,
          },
        ];

        if (jobId) {
          projectItems.push({
            id: "quote-project-type",
            label: "Project Type",
            value: "Linked to existing job",
          });
        }

        return [...newItems, ...projectItems];
      });
    }
  };

  const handleServicesUpdate = (services: any[]) => {
    setQuoteServices(services);

    const serviceItems: ContextItem[] = services.map((service, index) => ({
      id: quote-service-${index},
      label: "Service",
      value: ${service.description} (${service.quantity} × £${service.unitPrice} = £${service.lineTotal.toFixed(2)}),
    }));

    const servicesSubtotal = services.reduce(
      (sum, service) => sum + service.lineTotal,
      0
    );

    setContextItems((prevItems) => {
      const filteredItems = prevItems.filter(
        (item) =>
          !item.id.startsWith("quote-service-") &&
          item.id !== "quote-services-subtotal"
      );

      return [
        ...filteredItems,
        ...serviceItems,
        {
          id: "quote-services-subtotal",
          label: "Services Subtotal",
          value: £${servicesSubtotal.toFixed(2)},
        },
      ];
    });

    const materialsSubtotal = quoteMaterials.reduce(