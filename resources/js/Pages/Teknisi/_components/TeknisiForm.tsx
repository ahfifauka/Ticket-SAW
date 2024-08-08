import React, { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import { useForm } from "@inertiajs/react"
import { Label } from "@/Components/ui/label"
import { Input } from "@/Components/ui/input"
import InputError from "@/Components/InputError"

interface KaryawanFormProps {
  id: number
  name: string
  email: string
}

interface Karyawan {
  karyawan?: KaryawanFormProps
}

const KaryawanForm = ({ karyawan }: Karyawan) => {
  const [open, setOpen] = useState<boolean>(false)
  const { patch, post, data, setData, processing, errors, reset } = useForm({
    id: karyawan?.id ?? "",
    name: karyawan?.name ?? "",
    email: karyawan?.email ?? "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (karyawan) {
      patch(route("teknisi.update", karyawan.id), {
        preserveScroll: true,
        onSuccess: () => {
          setOpen(false)
          reset()
        },
      })
    } else {
      post(route("teknisi.store"), {
        preserveScroll: true,
        onSuccess: () => {
          setOpen(false)
          reset()
        },
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={karyawan ? "icon" : "sm"}>{karyawan ? <Edit size={20} /> : "Tambah Data"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form Karyawan</DialogTitle>
          <DialogDescription className="pt-5" asChild>
            <div>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label>Nama Karyawan</Label>
                  <Input type="text" value={data.name} onChange={(e) => setData("name", e.target.value)} autoFocus />
                  <InputError message={errors.name} />
                </div>
                <div className="space-y-2">
                  <Label>Email Karyawan</Label>
                  <Input type="email" value={data.email} onChange={(e) => setData("email", e.target.value)} />
                  <InputError message={errors.email} />
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

export default KaryawanForm
