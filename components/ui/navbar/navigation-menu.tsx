import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../navigation-menu";
import { ModeToggle } from "../../mode-toggle";

export function NavigationBar() {
    return (
        <NavigationMenu className="flex flex-row justify-between list-none min-w-full h-16 sticky top-0">
                <div className="flex flex-row">
                    <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/quiz" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Quiz
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about-me" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
            </div>
            <ModeToggle/>
        </NavigationMenu>
    )
}