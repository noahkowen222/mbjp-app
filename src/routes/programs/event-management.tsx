import { createFileRoute } from '@tanstack/react-router'
import {
  DepartmentProgramPage,
  departmentProgramPages,
} from '../../components/programs/DepartmentProgramPage'

export const Route = createFileRoute('/programs/event-management')({
  component: EventManagementDepartmentRoute,
})

function EventManagementDepartmentRoute() {
  return <DepartmentProgramPage program={departmentProgramPages.eventManagement} />
}
