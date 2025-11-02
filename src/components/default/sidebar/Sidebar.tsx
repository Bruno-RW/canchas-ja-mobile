import { useState } from "react";
import { useTranslation } from "react-i18next";
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
import { IonRouterLink } from "@ionic/react";
import { useLocation } from "react-router-dom";

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
  const { t } = useTranslation();
  const text = (key: string) => t(`Component.Default.Sidebar.${key}`);

  const pathname = useLocation().pathname;

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
      label: text("Account.Title"),
      items: [
        {
          id: "profile",
          label: text("Account.Profile"),
          icon: User,
          href: "/user/profile",
        },
        {
          id: "settings",
          label: text("Account.Settings"),
          icon: Settings,
          href: "/user/settings",
        },
        {
          id: "security",
          label: text("Account.Security"),
          icon: Shield,
          href: "/user/security",
        },
        {
          id: "privacy",
          label: text("Account.Privacy"),
          icon: Lock,
          href: "/user/privacy",
        },
          {
          id: "plans",
          label: text("Account.Plans"),
          icon: CreditCard,
          href: "/user/plans",
        },
      ],
    },
    {
      id: "activity",
      label: text("Activity.Title"),
      items: [
        {
          id: "games",
          label: text("Activity.Games"),
          icon: Calendar,
          href: "/user/games",
        },
        {
          id: "favorites",
          label: text("Activity.Favorites"),
          icon: Heart,
          href: "/user/favorites",
        },
        {
          id: "reviews",
          label: text("Activity.Reviews"),
          icon: Star,
          href: "/user/reviews",
        },
        {
          id: "bookings",
          label: text("Activity.Bookings"),
          icon: Calendar,
          href: "/user/bookings",
        },
      ],
    },
    {
      id: "social",
      label: text("Social.Title"),
      items: [
        {
          id: "friends",
          label: text("Social.Friends"),
          icon: Users,
          href: "/user/friends",
        },
        {
          id: "messages",
          label: text("Social.Messages"),
          icon: MessageSquare,
          href: "/user/messages",
        },
        {
          id: "notifications",
          label: text("Social.Notifications"),
          icon: Bell,
          href: "/user/notifications",
        },
      ],
    },
    {
      id: "support",
      label: text("Support.Title"),
      items: [
        {
          id: "help",
          label: text("Support.HelpCenter"),
          icon: HelpCircle,
          href: "/help",
        },
        {
          id: "contact",
          label: text("Support.Contact"),
          icon: Mail,
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <aside className="w-full lg:w-72 shrink-0 border-r border-gray-200 dark:border-gray-800">
      <nav className="flex flex-col space-y-3">
        {menuGroups.map((group) => {
          const isOpen = openSections.includes(group.id);

          return (
            <Collapsible
              key={group.id}
              open={isOpen}
              onOpenChange={() => toggleSection(group.id)}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 my-0! text-2xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                <span>{group.label}</span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isOpen && "rotate-90"
                  )}
                />
              </CollapsibleTrigger>

              <CollapsibleContent>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id || pathname.endsWith(item.href);

                  return (
                    <IonRouterLink
                      key={item.id}
                      routerLink={item.href}
                      onClick={() => onTabChange?.(item.id)}
                      >
                      <span
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 ml-3 text-md rounded-md transition-colors",
                          "hover:bg-gray-100 dark:hover:bg-gray-800",
                          isActive
                            ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium"
                            : "text-gray-600 dark:text-gray-400"
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <p>{item.label}</p>
                      </span>
                    </IonRouterLink>
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
