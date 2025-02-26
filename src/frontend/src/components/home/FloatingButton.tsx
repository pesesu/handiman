import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Lightbulb } from 'lucide-react'

const FloatingButton = ()  =>{
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            className=" rounded-full w-12 h-12 p-0"
            variant="default"
          >
            <Lightbulb className="h-6 w-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Explore Now</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default FloatingButton
