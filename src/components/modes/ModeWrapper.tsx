import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ModeWrapperProps {
  mode: {
    icon: React.ElementType;
    name: string;
    description: string;
  };
  children: React.ReactNode;
}

export function ModeWrapper({ mode, children }: ModeWrapperProps) {
    const Icon = mode.icon;
    return (
        <div className="flex flex-col items-center justify-start h-full text-center p-4 md:p-8">
            <div className="w-full max-w-4xl">
                <Card className="shadow-lg">
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
                            <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                                <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold font-headline">{mode.name}</h2>
                                <p className="text-md text-muted-foreground">{mode.description}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
