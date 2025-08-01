
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useModes } from '@/components/providers/ModeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, LineChart, PieChart, Settings, AlertTriangle } from 'lucide-react';
import { ModeWrapper } from './ModeWrapper';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateChartFromPrompt, GenerateChartFromPromptOutput } from '@/ai/flows/generate-chart-from-prompt';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Bar, Line, Pie, Cell, CartesianGrid, XAxis, YAxis } from 'recharts';

export function ChartMaker({ mode }: { mode: any }) {
    const { addHistoryItem, model } = useModes();
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chartData, setChartData] = useState<GenerateChartFromPromptOutput | null>(null);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Please enter a description for the chart.');
            return;
        }
        setIsLoading(true);
        setChartData(null);
        setError('');
        try {
            const result = await generateChartFromPrompt({ prompt, model });
            setChartData(result);
            addHistoryItem('chart_maker', prompt, result);
        } catch (err: any) {
            setError(`Failed to generate chart: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const renderChart = () => {
        if (!chartData) return null;

        const { type, data, config, xAxisKey } = chartData;
        const chartConfig = config || {};

        switch (type) {
            case 'bar':
                const barKeys = Object.keys(chartConfig);
                return (
                    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                        <BarChart accessibilityLayer data={data}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey={xAxisKey} tickLine={false} tickMargin={10} axisLine={false} />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                             <ChartLegend content={<ChartLegendContent />} />
                            {barKeys.map(key => (
                                <Bar key={key} dataKey={key} fill={`var(--color-${key})`} radius={4} />
                            ))}
                        </BarChart>
                    </ChartContainer>
                );
            case 'line':
                 const lineKeys = Object.keys(chartConfig);
                return (
                    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                        <LineChart accessibilityLayer data={data}>
                             <CartesianGrid vertical={false} />
                            <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} tickMargin={8} />
                             <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                             <ChartLegend content={<ChartLegendContent />} />
                            {lineKeys.map(key => (
                                <Line key={key} dataKey={key} type="monotone" stroke={`var(--color-${key})`} strokeWidth={2} dot={false} />
                            ))}
                        </LineChart>
                    </ChartContainer>
                );
            case 'pie':
                return (
                    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
                        <PieChart>
                             <ChartTooltip content={<ChartTooltipContent nameKey="value" hideLabel />} />
                            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={60}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={`var(--color-${entry.name})`} />
                                ))}
                            </Pie>
                            <ChartLegend content={<ChartLegendContent />} />
                        </PieChart>
                    </ChartContainer>
                )
            default:
                return <p>Unsupported chart type.</p>;
        }
    };

    return (
        <ModeWrapper mode={mode}>
            <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a bar chart of monthly sales for Q1: Jan $4000, Feb $3000, Mar $5000"
                className="w-full bg-background border-2 border-input focus:border-primary focus:ring-0 rounded-lg p-3 resize-none transition-colors"
                rows={3}
            />
            <Button onClick={handleGenerate} disabled={isLoading} className="w-full mt-4">
                {isLoading ? <><Settings className="animate-spin mr-2" /> Generating...</> : 'Generate Chart'}
            </Button>

            {error && (
                <Alert variant="destructive" className="mt-6 text-left">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mt-6 w-full">
                {isLoading && (
                    <Card className="w-full h-80 bg-muted/50 flex items-center justify-center animate-pulse">
                        <BarChart className="h-16 w-16 text-muted-foreground" />
                    </Card>
                )}
                {chartData && !isLoading && (
                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle>Canvas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {renderChart()}
                        </CardContent>
                    </Card>
                )}
            </div>
        </ModeWrapper>
    );
}
