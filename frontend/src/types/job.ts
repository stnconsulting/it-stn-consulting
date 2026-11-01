import type { Beschreibung } from '@/types/beschreibung'
import type { Arbeitsmodell } from '@/types/arbeitsmodell'
import type { Anstellungsart } from '@/types/anstellungsart'
import type { JobVolume } from '@/types/job_volume'

interface Job {
  id: number
  bild: string
  titel: string
  arbeitsmodell: Arbeitsmodell
  anstellungsart: Anstellungsart
  job_volume: JobVolume
  beschreibung: Beschreibung
  ort: string
  gehalt: string
  startdatum: string
  referenz_link: string
}

export type { Job }