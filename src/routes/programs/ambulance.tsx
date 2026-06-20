import { createFileRoute } from '@tanstack/react-router'
import {
  DepartmentProgramPage,
  departmentProgramPages,
} from '../../components/programs/DepartmentProgramPage'

export const Route = createFileRoute('/programs/ambulance')({
  component: AmbulanceDepartmentRoute,
})

function AmbulanceDepartmentRoute() {
  return <DepartmentProgramPage program={departmentProgramPages.ambulance} />
}
