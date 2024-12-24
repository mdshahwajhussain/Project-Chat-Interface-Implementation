"use client";

import { Info, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function UserInfo() {
  return (
    <div className="w-80 border-l bg-muted/10">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Information</h3>
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Segment</label>
            <div className="flex items-center mt-1">
              <Search className="h-4 w-4 text-muted-foreground mr-2" />
              <Input placeholder="Search in general..." className="h-8" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <p className="text-sm text-muted-foreground">oguzyagikara@gmail.com</p>
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <p className="text-sm text-muted-foreground">+90 535 646 81 77</p>
          </div>

          <div>
            <label className="text-sm font-medium">Last Visited</label>
            <p className="text-sm text-muted-foreground">8 Aug, 2021</p>
          </div>

          <Separator />

          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Tags</h4>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4" />
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-muted px-2 py-1 rounded">Abandoned Cart User</span>
              <span className="text-xs bg-muted px-2 py-1 rounded">Popup</span>
              <span className="text-xs bg-muted px-2 py-1 rounded">Shop Error</span>
              <span className="text-xs bg-muted px-2 py-1 rounded">Successful</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}