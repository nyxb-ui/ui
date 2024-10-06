
            'use client'

            import {Card,CardHeader,CardTitle,CardDescription,CardContent} from "~/registry/miami/ui/card"
import {Label} from "~/registry/miami/ui/label"
import {Input} from "~/registry/miami/ui/input"
import {Textarea} from "~/registry/miami/ui/textarea"

            export default function Component() {
              return (<Card x-chunk="dashboard-07-chunk-0">
                           <CardHeader>
                              <CardTitle>Product Details</CardTitle>
                              <CardDescription>
                                 Lipsum dolor sit amet, consectetur adipiscing elit
                              </CardDescription>
                           </CardHeader>
                           <CardContent>
                              <div className="grid gap-6">
                                 <div className="grid gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                       id="name"
                                       type="text"
                                       className="w-full"
                                       defaultValue="Gamer Gear Pro Controller"
                                    />
                                 </div>
                                 <div className="grid gap-3">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                       id="description"
                                       defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                       className="min-h-32"
                                    />
                                 </div>
                              </div>
                           </CardContent>
                        </Card>)
            }