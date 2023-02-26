export default interface OneDayTour{
    id: number
    attributes: {
        name: string
        description: string
        cover_image: {
            data: {
                attributes: {
                    formats: {
                        thumbnail: {
                            url: string;
                        }
                    }
                }
            }
        }
        tour_program: string
        service: string
        price: number
        remaining: number
    }
  }
