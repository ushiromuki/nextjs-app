import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex size-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>サンプルページ</CardTitle>
          <CardDescription>サンプルページの説明</CardDescription>
        </CardHeader>
        <CardContent>
          <p>サンプルページの説明</p>
        </CardContent>
        <CardFooter>
          <p>サンプルページの説明</p>
        </CardFooter>
      </Card>
    </div>
  );
}
