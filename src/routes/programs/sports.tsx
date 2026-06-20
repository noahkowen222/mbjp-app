import { createFileRoute } from '@tanstack/react-router'
import {
  DepartmentProgramPage,
  departmentProgramPages,
} from '../../components/programs/DepartmentProgramPage'

export const Route = createFileRoute('/programs/sports')({
  component: SportsDepartmentRoute,
})

function SportsDepartmentRoute() {
  return <DepartmentProgramPage program={departmentProgramPages.sports} />
}
