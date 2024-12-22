
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { gptData } from "@/lib/data"
import { CHatGptIcon, ExploreIcon, NewChatIcon, ThreeDot } from "@/lib/Icon"
import { ChefHatIcon, SearchIcon } from "lucide-react"



export default function AppSidebar() {
    return (
        <Sidebar className="bg-[#f9f9f9]">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="px-2">
                        <div className="flex justify-end items-center gap-4">
                            <SearchIcon className="cursor-pointer" />
                            <NewChatIcon className={'cursor-pointer'} />
                        </div>


                        <div className="space-y-2">
                            <div className="flex hover:bg-[#e3e3e3] py-3 px-3 rounded-md transition-all ease-in-out duration-500 cursor-pointer mt-5 justify-start items-center gap-3">
                                <CHatGptIcon className={''} />
                                <h3 className="">Chatgpt</h3>
                            </div>
                            <div className="flex hover:bg-[#e3e3e3] py-3 px-3 rounded-md transition-all ease-in-out duration-500 cursor-pointer mt-5 justify-start items-center gap-3">
                                <ExploreIcon className={''} />
                                <h3 className="">Explore GPT</h3>
                            </div>

                            {
                                gptData?.map((item, index) => {
                                    return (
                                        <div className="flex gpt-item hover:bg-[#e3e3e3] py-3 px-3 rounded-md transition-all ease-in-out duration-500 cursor-pointer mt-5 justify-between items-center gap-3">
                                            <h3 className="">{item?.title}</h3>
                                            <ThreeDot />
                                        </div>
                                    )
                                })
                            }


                        </div>


                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
