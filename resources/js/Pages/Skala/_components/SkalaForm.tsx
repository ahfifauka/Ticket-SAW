import InputError from "@/Components/InputError"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "@inertiajs/react"
import { Edit } from "lucide-react"
import { useState } from "react"

interface Skala {
  id: number
  level: string
  point: number
}

interface SkalaFormProps {
  skala?: Skala
}
const SkalaForm = ({ skala }: SkalaFormProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { patch, post, data, setData, errors, processing } = useForm({
    id: skala?.id ?? "",
    level: skala?.level ?? "",
    point: skala?.point ?? "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (skala) {
      patch(route("skala_level.update", skala.id), {
        preserveScroll: true,
        onSuccess: () => setOpen(false),
      })
    } else {
      post(route("skala_level.store"), {
        preserveScroll: true,
        onSuccess: () => setOpen(false),
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={skala ? "icon" : "sm"}>{skala ? <Edit size={20} /> : "Tambah Data"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form</DialogTitle>
          <DialogDescription className="pt-5" asChild>
            <div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-2">
                  <Label>Level</Label>
                  <Input type="text" value={data.level} className={`${errors.level ? "border border-red-500" : ""}`} onChange={(e) => setData("level", e.target.value)} autoFocus />
                  <InputError message={errors.level} />
                </div>
                <div className="space-y-2">
                  <Label>Point</Label>
                  <Input type="number" value={data.point} className={`${errors.point ? "border border-red-500" : ""}`} onChange={(e) => setData("point", e.target.value)} />
                  <InputError message={errors.point} />
                </div>
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

export default SkalaForm
