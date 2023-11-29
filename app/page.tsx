import { Button } from "@/components/ui/button";
import { IconPlus } from "@/components/ui/icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-8">
        <details className="transition-all duration-500 ease-in-out">
          <summary className="text-xl font-bold text-gray-700 dark:text-gray-300 cursor-pointer pb-2 border-b-2 border-gray-300 dark:border-gray-600">
            Monday
          </summary>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 1
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 2
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 3
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Vegan Option
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </details>
        <details className="transition-all duration-500 ease-in-out">
          <summary className="text-xl font-bold text-gray-700 dark:text-gray-300 cursor-pointer pb-2 border-b-2 border-gray-300 dark:border-gray-600">
            Tuesday
          </summary>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 1
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 2
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </details>
        <details className="transition-all duration-500 ease-in-out">
          <summary className="text-xl font-bold text-gray-700 dark:text-gray-300 cursor-pointer pb-2 border-b-2 border-gray-300 dark:border-gray-600">
            Wednesday
          </summary>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 1
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 2
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 3
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </details>
        <details className="transition-all duration-500 ease-in-out">
          <summary className="text-xl font-bold text-gray-700 dark:text-gray-300 cursor-pointer pb-2 border-b-2 border-gray-300 dark:border-gray-600">
            Thursday
          </summary>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 1
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 2
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Vegan Option
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </details>
        <details className="transition-all duration-500 ease-in-out">
          <summary className="text-xl font-bold text-gray-700 dark:text-gray-300 cursor-pointer pb-2 border-b-2 border-gray-300 dark:border-gray-600">
            Friday
          </summary>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 1
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 2
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Option 3
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              Vegan Option
              <Button variant="ghost">
                <IconPlus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </details>
      </div>
    </main>
  );
}
