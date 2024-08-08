import React, { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { useForm } from "@inertiajs/react"
import InputError from "@/Components/InputError"

interface Case {
  id: number
  category: string
}

interface CustomPageProps {
  cases?: Case
}
const CaseForm = ({ cases }: CustomPageProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { patch, post, data, setData, errors, processing } = useForm({
    id: cases?.id ?? "",
    category: cases?.category ?? "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (cases) {
      patch(route("case_category.update", cases.id), {
        preserveScroll: true,
        onSuccess: () => setOpen(false),
      })
    } else {
      post(route("case_category.store"), {
        preserveScroll: true,
        onSuccess: () => setOpen(false),
      })
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={cases ? "icon" : "sm"}>{cases ? <Edit size={20} /> : "Tambah Data"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form</DialogTitle>
          <DialogDescription className="pt-5" asChild>
            <div>
              <form onSubmit={handleSubmit} className="space-y-2">
                <Label>Category</Label>
                <Input type="text" value={data.category} onChange={(e) => setData("category", e.target.value)} autoFocus />
                <InputError message={errors.category} />
                <Button className="w-full" disabled={processing}>
                  Save
                </Button>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CaseForm
