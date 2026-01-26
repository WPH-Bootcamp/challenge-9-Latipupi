import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { cn } from "../../../lib/utils";
import { FormSignin } from "./FormSignin";
import { FormSignup } from "./FormSignup";
import { useAppSelector } from "../../../lib/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";


export function LoginForm() {
    const [activeTab, setActiveTab] = useState("signin");
    const token = useAppSelector((state) => state.auth.token);
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated && token) {
            navigate("/", { replace: true });
        }
    }, [isAuthenticated, token, navigate]);

    const signinSignup = () => {
        return (<div className="md:mx-auto md:py-30 p-6">
            <div className="flex gap-2 items-center mb-6">
                <img src="/logo-fotter.svg" alt="Logo" width={40} height={40} />
                <h3 className="font-bold text-2xl">Foody</h3>
            </div>
            <h1 className="font-bold text-3xl">Welcome Back</h1>
            <p className="mb-6 mt-2">Good to see you again! Let’s eat</p>
            <Tabs defaultValue="signin" onValueChange={(value: string) => setActiveTab(value)} >
                <TabsList className="bg-gray-100 rounded-md h-12 w-84  mb-4">
                    <TabsTrigger value="signin" className={cn("w-40 h-10 rounded-md", activeTab === "signin" ? "bg-white" : "bg-gray-100")}>Sign in</TabsTrigger>
                    <TabsTrigger value="signup" className={cn("w-40 h-10 rounded-md", activeTab === "signup" ? "bg-white" : "bg-gray-100")}>Sign up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                            <FormSignin />
                </TabsContent>
                  <TabsContent value="signup">
                            <FormSignup />
                </TabsContent>
            </Tabs>
        </div>)
    }

    return (
        <section className="">
            <div className="flex">
            <div className="flex">
                <div className="hidden md:flex">
                    <img src="/frame.svg" alt="Login Frame" />
                </div>
            </div>
                {signinSignup()}
            </div>
        </section>
    )

}
