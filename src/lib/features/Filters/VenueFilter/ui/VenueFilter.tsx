import { DesignedSelect } from '@/lib/shared'
import classes from './VenueFilter.module.scss'

export function VenueFilter() {
    const venues = [
      "Гостиница Continental",
      "Гостиница Continental",
      "Гостиница Continental",
      "Гостиница Continental",
      "Гостиница Continental",
      "Гостиница Continental",
      "Гостиница Continental",
    ];

    return (
        <DesignedSelect options={venues} description='Место проведения'/>
    )
}