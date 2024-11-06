import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
    const { userId } = await auth();
    if ( userId ) {
        redirect("/");
    }
    return ( 
        <div className="grid h-full grid-cols-2">
            <div className="flex flex-col  justify-center p-8 m-w-[550px] mx-auto">
                <Image className="mb-8" src="/logo.png" alt="Logo" width={173} height={89}/>
                <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
                <p className="text-muted-foreground  mb-8">A Finance AI é uma plataforma de gestão financeira que utiliza<br/>
                IA para monitorar suas movimentações, e oferecer insights<br/>
                personalizados, facilitando o controle do seu orçamento.</p>
                <SignInButton>
                <Button variant="outline">
                    <LogInIcon className="mr-2"/>
                    Fazer Login ou criar conta
                </Button>
                </SignInButton>
            </div>
            <div className="relative h-full w-full">
                <Image src="/fundo.png" alt="Faça Login" fill className="object-cover"/>
            </div>
        </div>
     );
}
 
export default LoginPage;