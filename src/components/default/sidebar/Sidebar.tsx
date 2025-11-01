"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  User,
  Settings,
  Shield,
  Lock,
  Calendar,
  Heart,
  Star,
  Users,
  MessageSquare,
  Bell,
  HelpCircle,
  Mail,
  ChevronRight,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/utils";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab = "about",
  onTabChange,
}) => {
  const t = useTranslations("Component.Default.Sidebar");
  const pathname = usePathname();

  const [openSections, setOpenSections] = useState<string[]>([
    "account",
    "activity",
    "social",
    "support",
  ]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const menuGroups = [
    {
      id: "account",
      label: t("Account.Title"),
      items: [
        {
          id: "profile",
          label: t("Account.Profile"),
          icon: User,
          href: "/user/profile",
        },
        {
          id: "settings",
          label: t("Account.Settings"),
          icon: Settings,
          href: "/user/settings",
        },
        {
          id: "security",
          label: t("Account.Security"),
          icon: Shield,
          href: "/user/security",
        },
        {
          id: "privacy",
          label: t("Account.Privacy"),
          icon: Lock,
          href: "/user/privacy",
        },
          {
          id: "plans",
          label: t("Account.Plans"),
          icon: CreditCard,
          href: "/user/plans",
        },
      ],
    },
    {
      id: "activity",
      label: t("Activity.Title"),
      items: [
        {
          id: "games",
          label: t("Activity.Games"),
          icon: Calendar,
          href: "/user/games",
        },
        {
          id: "favorites",
          label: t("Activity.Favorites"),
          icon: Heart,
          href: "/user/favorites",
        },
        {
          id: "reviews",
          label: t("Activity.Reviews"),
          icon: Star,
          href: "/user/reviews",
        },
        {
          id: "bookings",
          label: t("Activity.Bookings"),
          icon: Calendar,
          href: "/user/bookings",
        },
      ],
    },
    {
      id: "social",
      label: t("Social.Title"),
      items: [
        {
          id: "friends",
          label: t("Social.Friends"),
          icon: Users,
          href: "/user/friends",
        },
        {
          id: "messages",
          label: t("Social.Messages"),
          icon: MessageSquare,
          href: "/user/messages",
        },
        {
          id: "notifications",
          label: t("Social.Notifications"),
          icon: Bell,
          href: "/user/notifications",
        },
      ],
    },
    {
      id: "support",
      label: t("Support.Title"),
      items: [
        {
          id: "help",
          label: t("Support.HelpCenter"),
          icon: HelpCircle,
          href: "/help",
        },
        {
          id: "contact",
          label: t("Support.Contact"),
          icon: Mail,
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 border-r border-gray-200 dark:border-gray-800">
      <nav className="flex flex-col p-2">
        {menuGroups.map((group) => {
          const isOpen = openSections.includes(group.id);

          return (
            <Collapsible
              key={group.id}
              open={isOpen}
              onOpenChange={() => toggleSection(group.id)}
              className="mb-1"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                <span>{group.label}</span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isOpen && "rotate-90"
                  )}
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="mt-1 space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id || pathname.endsWith(item.href);

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => onTabChange?.(item.id)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 ml-3 text-sm rounded-md transition-colors",
                        "hover:bg-gray-100 dark:hover:bg-gray-800",
                        isActive
                          ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium"
                          : "text-gray-600 dark:text-gray-400"
                      )}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </nav>
    </aside>
  );
};
export default Sidebar;
