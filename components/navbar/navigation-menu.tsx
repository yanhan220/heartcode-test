import { ModeToggle } from "../mode-toggle";
import { NavigationMenu } from "../ui/navigation-menu";
import { NavigationItem, NavItem } from "./navigation-item";

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const navItems: NavItem[] = [
	{ navigationLink: "/", navigationDescription: "Home" },
	{ navigationLink: "/quiz", navigationDescription: "Quiz" },
	{ navigationLink: "/about-me", navigationDescription: "About Me" },
]

export default function NavigationBar() {
	return (
    	<NavigationMenu className="sticky top-0 list-none flex justify-between min-w-full h-[60px] bg-black px-5">
        	<div className="flex flex-row justify-start gap-4">
            	{navItems.map((navItem, index) => <NavigationItem key={index} navigationLink={navItem.navigationLink} navigationDescription={navItem.navigationDescription} />)}
        	</div>
            <div className="flex flex-row justify-end gap 4 space-x-8">
                <ModeToggle />

                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

    	</NavigationMenu>
	)
}
