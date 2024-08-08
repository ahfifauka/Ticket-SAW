import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { PageProps } from "@/types"
import { useForm, usePage } from "@inertiajs/react"
import { useState } from "react"
import InputError from "@/Components/InputError"
import { Edit } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Levels {
  id: number
  level: number
  point: number
}

interface CustomPageProps extends PageProps {
  levels: Levels[]
}

interface Jabatan {
  id: number
  jabatan: string
  skala_level_id: number
}

interface JabatanFormProps {
  jabatan?: Jabatan
}
const JabatanForm = ({ jabatan }: JabatanFormProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { levels } = usePage<CustomPageProps>().props
  const { post, patch, data, setData, errors, processing } = useForm({
    id: jabatan?.id ?? "",
    jabatan: jabatan?.jabatan ?? "",
    skala_level_id: jabatan?.skala_level_id ?? "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (jabatan) {
      patch(route("master_jabatan.update", jabatan.id), {
        preserveScroll: true,
        onSuccess: () => {
          setIsOpen(false)
        },
      })
    } else {
      post(route("master_jabatan.store"), {
        preserveScroll: true,
        onSuccess: () => {
          setIsOpen(false)
        },
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={jabatan ? "icon" : "sm"}>{jabatan ? <Edit size={20} /> : "Tambah Data"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form</DialogTitle>
          <DialogDescription className="pt-5" asChild>
            <div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label>Nama Jabatan</Label>
                  <Input type="text" value={data.jabatan} className={`${errors.jabatan ? "border border-red-500" : ""}`} onChange={(e) => setData("jabatan", e.target.value)} autoFocus />
                  <InputError message={errors.jabatan} />
                </div>
                <div className="space-y-2">
                  <Label>Skala Level</Label>
                  <Select onValueChange={(value) => setData("skala_level_id", value)} defaultValue={data.skala_level_id.toString()}>
                    <SelectTrigger className={`${errors.skala_level_id ? "border border-red-500" : ""}`}>
                      <SelectValue placeholder="Tentukan Skala Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level.id} value={level.id.toString()}>
                          {`Skala : ${level.level}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <InputError message={errors.skala_level_id} />
                </div>
                <div>
                  <Button className="w-full" disabled={processing}>
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default JabatanForm
