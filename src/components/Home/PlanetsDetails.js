import React from 'react'
import { Card,CardContent,Typography,Chip } from '@mui/material'

const PlanetsDetails = ({planet}) => {

  return (
    <Card className="rounded-xl shadow-lg">
      <CardContent>
        <Typography variant="h5" component="div" className="font-bold mb-2">
          {planet.name}
        </Typography>
        <Typography variant="body2" component="p" className="text-gray-500">
          {planet.population}
        </Typography>
      </CardContent>
      <CardContent className="px-3 pt-2">
        <Chip label="Jedi" className="bg-gray-700 text-white mr-2 mb-2" />
        <Chip label="Sith" className="bg-gray-700 text-white mr-2 mb-2" />
      </CardContent>
      <CardContent className="px-3 pb-2">
        <Chip label="#StarWars" className="bg-gray-700 text-white mr-2 mb-2" />
        <Chip label="#GalacticConflict" className="bg-gray-700 text-white mr-2 mb-2" />
      </CardContent>
    </Card>
  )
}

export default PlanetsDetails