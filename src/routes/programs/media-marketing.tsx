import { createFileRoute } from '@tanstack/react-router'
import {
  DepartmentProgramPage,
  departmentProgramPages,
} from '../../components/programs/DepartmentProgramPage'

export const Route = createFileRoute('/programs/media-marketing')({
  component: MediaMarketingDepartmentRoute,
})

function MediaMarketingDepartmentRoute() {
  return <DepartmentProgramPage program={departmentProgramPages.mediaMarketing} />
}
