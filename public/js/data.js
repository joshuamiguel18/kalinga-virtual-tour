const destinations = [
    {
        name: "Chico River",
        description: "It is referred to as a river of life for the Kalinga people who live on its banks, and is well known among development workers because of the Chico River Dam Project, an electric power generation project which local residents resisted for three decades before it was finally shelved in the 1980s - a landmark case study concerning ancestral domain issues in the Philippines",
        image: "/images/chico-river/Chico River.jpg",
        sub_destinations: [
            {name: "Calanan", image: ""},
            {name: "Dam Site", image: ""},
            {name: "Gunugun", image: ""},
            {name: "Jump Off", image: ""},
            {name: "White Water Rafting", image: ""},
            
        ],
    },
    {
        name: "Malalao",
        description: "Malalao, specifically referring to Malalao Hills in Kalinga, Philippines, is a tourist attraction known for its lush greenery, hiking trails, and scenic views.",
        image: "/images/480857576_1705457447068459_4444692375793244962_n.jpg",
        sub_destinations: [
            {name: "Grass", image: ""},
            {name: "Pasture Island", image: ""},
            {name: "calanan", image: ""},
            {name: "calanan", image: ""},
            {name: "calanan", image: ""},
        ],
    },
    {
        name: "Naneng Heritage",
        description: "It features Ginitob houses, the Saint Joseph Parish church (built in 1927), and traditional granaries. The village is also recognized for its pioneering \"Inabel\" weaving, which involves a traditional backstrap weaving technique called \"laga\"",
         image: "/images/IMG_20230205_122500.jpg",
       
        sub_destinations: [
            {name: "Grass", image: ""},
            {name: "Pasture Island", image: ""},
            {name: "calanan", image: ""},
            {name: "calanan", image: ""},
            {name: "calanan", image: ""},
        ],
    },
    {
        name: "Talama",
        description: "It's a popular spot for tourists to enjoy panoramic views of the surrounding mountains and the Chico River, and to take photos. The area is also suitable for picnics and relaxing amidst nature. Additionally, Mt. Talama is home to Skyridge Grill and Chill, a restaurant offering a romantic dining experience with city views. ",
         image: "/images/IMG_20240312_141943.jpg",
        sub_destinations: [
            {name: "Grass", image: ""},
            {name: "Pasture Island", image: ""},
            {name: "calanan", image: ""},
            {name: "calanan", image: ""},
            {name: "calanan", image: ""},
        ],
    },
    {
        name: "Water Falls",
        description: "Tabuk City in Kalinga, Philippines, is known for its waterfalls, with at least two notable ones being Bangabanga Falls and Ligayan Falls. Bangabanga Falls, nestled between mountains, offers refreshing, clear water and picturesque, jar-like mini-landscapes",
        sub_destinations: [
            {name: "Grass", image: ""},
            {name: "Pasture Island", image: ""},
            {name: "calanan", image: ""},
            {name: "calanan", image: ""},
            {name: "calanan", image: ""},
        ],
    }
]

const tours = [
  {
    name: "ATV Adventure",
    headerDescription: "Thrilling off-road ATV adventure.",
    fullDescription: "Ride through rugged mountain trails and scenic countryside on a powerful all-terrain vehicle at The Ranch ATV Adventures (TRAAK) in Tabuk, Kalinga.",
    features: [
      "Guided ATV tours for all skill levels",
      "Scenic mountain and countryside trails",
      "Safety gear and brief training provided",
    ],
    image: "https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/482248551_645132791595150_1026386237012222764_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEDAz8rhPNlj58qssbCg3Id3eAzCg08KvXd4DMKDTwq9djqEtmhWjB206IRxzxVPV7HxQEaJ4Zk7NQcgDde_-RV&_nc_ohc=tu_WQszBjYcQ7kNvwF2t9WF&_nc_oc=AdmuxJXWVXJBjVyRVJCpLd87qc0YU9uaERx6b10etzG3zAZRJXUqNc68BYXLtpw-XLA&_nc_zt=23&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=JzW6gaJE9-d4PIEDO94u9g&oh=00_AfUsJP37RKKctCDPZSfFjjdQ-KXEZmdTW7vRfPzGpdzRyw&oe=68A2B0AF"
  },
  {
    name: "White Water Rafting",
    headerDescription: "Ride the rapids for pure excitement.",
    fullDescription: "Navigate the exhilarating white-water rapids of the Chico River with breathtaking Cordillera landscapes as your backdrop—a river adventure eagerly sought by thrill-seekers.",
    features: [
      "Professional rafting guides",
      "Rapids for beginners & experts",
      "Stunning river scenery",
      "Safety equipment included"
    ],
    image: "https://farm8.staticflickr.com/7259/6991305622_6479cb0a38_z.jpg"
  },
  {
    name: "Trekking",
    headerDescription: "Hike through hidden trails and vistas.",
    fullDescription: "Trek through scenic mountain paths, discover hidden villages, and enjoy panoramic views of Kalinga's rugged landscapes.",
    features: [
      "Guided hikes for all fitness levels",
      "Cultural encounters with local tribes",
      "Breathtaking mountain views",
      "Nature and wildlife spotting"
    ],
    image: "https://secret-ph.com/wp-content/uploads/2023/09/Popular-Trekking-Destinations-in-Kalinga.jpg"
  },
  {
    name: "Fruit Picking",
    headerDescription: "Harvest fresh, juicy local produce.",
    fullDescription: "Spend a relaxing day in local orchards, picking seasonal fruits while enjoying peaceful rural surroundings.",
    features: [
      "Hands-on fruit harvesting",
      "Seasonal fruits (mangoes, citrus, etc.)",
      "Family-friendly activity",
      "Farm-to-table experience"
    ],
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
  },
  {
    name: "Community Life Tour",
    headerDescription: "Immerse in authentic village traditions.",
    fullDescription: "Experience local traditions firsthand, meet Kalinga residents, and join cultural activities beyond the usual tourist path.",
    features: [
      "Cultural workshops (weaving, pottery)",
      "Traditional Kalinga meals",
      "Interaction with indigenous communities",
      "Insight into local heritage"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgoyHj2NBqpbTghrJ5_xlP4WTw0HAXGqvag&s"
  },
  {
    name: "Farm Immersion",
    headerDescription: "Hands-on rural farm living.",
    fullDescription: "Plant, harvest, and learn sustainable farming practices in a tranquil rural setting.",
    features: [
      "Learn organic farming techniques",
      "Plant rice, vegetables, or herbs",
      "Farm-to-table lunch included",
      "Relaxing countryside escape"
    ],
    image: "https://secret-ph.com/wp-content/uploads/2023/09/Hidden-Gems-of-Kalinga.jpg"
  },
  {
    name: "Extreme Bike",
    headerDescription: "High-energy biking on rugged terrain.",
    fullDescription: "Challenge yourself on steep slopes, forest paths, and adrenaline-pumping descents.",
    features: [
      "Mountain bike rentals available",
      "Trails for beginners & experts",
      "Guided downhill routes",
      "Scenic but challenging paths"
    ],
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXFxoWFxgXGBgYGBgYFxcXFxcXGBgZHSggGholHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANYA6wMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAD8QAAEDAgQDBQcDAwMDBAMAAAEAAhEDIQQSMUEFUWEicYGRoQYTMrHB0fAUUuFCYvEVcpIHFoKistLiIzNT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQGBf/EACwRAAICAQQBBAECBwEAAAAAAAABAhEhAxIxQRMEIlFhMqHwBRVScZGx0RT/2gAMAwEAAhEDEQA/APQqxAqxsR9FXYogECDF9EeuJIfo4GD1HRTfWaHE9PVdCwRZV41jcmYD7qqxOKPu4nvVxxGu0tIEQqKpRsFeH2Tn9FeGyiVKEBOYOiCUfHUrJ3PNE1HFlfw+lLlb06ZzabrXAcFmJd4LpKeCG4UdSeSsI4OKx1A5pTmGw5DRbVdLxPA08thclTweDbHaG0JXq4GWnk4jihvlChRo5RPmumx2HZnNgqyvSkEqinaoRwzZUNcm5c4AaBZSwxJTpYGi6MmCKEHtDBdVWJq5irHF3PRLCjOiaOMiy+Cv92sNAq9pcLlMVsFlYLXR8qB42c3+mPJRdQVpVoORaHDSddUfIDYUooqYwx5LqHcIgAjyQxwokwTCHmQ3iZzn6ZZ+nK6+nwAfuBQXYAtMZYQ8yN4mc03Blb/SFdCcFql3YbwW8tm8ZSGjCjlKuamBEWQhginWohXBlSWrUK7rcLMTIVc7DkJlNMVxaO4qYk14aCGxc9VCu4htrpJ7A10DXdWOGZmA6/kLmaSOhOytdJlRo0i5ptp8l0FLhgmdjYhCODNJ2ZtwbEckPIg7WUjcMWmYMKxfw51VvYEq7AD2zFxsso1GsFoB3U3qMZQRz3Aqho1Cx4IJO6vsTiC1K8SpsrGQYc3lqq3i2KcC0Dks1vdmXtRb4WvnHih46oWW56clV8GqwZ5nVNe0NUZNDOx6IbalQbxZU4nGgnLeUNjDpzQMFhy58rqsDw2AHx5qkmoiRuRW0+HOa3MQq3EbldPisU74WQT6KlOEc90JYy7YzXwU7cO55sFccN4UbSFdYPABugCafVa3QCUJareEaMK5A0uHtsAIK27hQGpEclKhWMTz0Ua1YjdSyUwI4jgwnsoVDA5TBT9HicAzoFA48u009U1yFpDLKTVOpw9pbZBov5lMnFZQlyMVlLCkOTtWiC3S6372UTOFmzUVVWjCQqUei6GpQB2koLsDP8plKhWjnn4UEX1SpbE+i6d+AkIVTg1pCopoVxKatJAASzsKZ+FXhwhCw4Y8kVOgbTVfBFxBaO9E4ZSJ7LhcHuT9CsWgyLAI7MSwjNCDk6oKihXE4nJPqNUbNmbLdPNUvEcSc+liNeaHh+KFpA0C3jbQN6sty8tBvc3hIsxAeYM33Ujj8wk9yr2mf9wPmsomchLizHU3a9xSlbiLjEmYVlxM+9bGjhtuVz+W66dNJrJCbaeBzDVXZhltdOcarOLgCZsCPqi8LpUnjWHDWUrxGDUESdug5AJcOQ2dpcezlPUlWGPx0nLKzhdHKwA270u7DiS4HeOi5205WWWERwlBxKt6tVo5TzSWEcRqQim5uklljIK7EgyG6xZItwLtdea1jKwYQN0WlxDQBan0a0M4ewQMRVEwpirPRV2OdmFtZWStmbAVcK4uN+ynqTHNHNAbVAHaTdJ8iUzsCFA9xJkGybDovJWGrtG629350QCY+uXDsgHmhOqZL6lDp1wHEAqLwSblGgWMU8c+eQRBjSVBtCRAWU2ZSZMhDAchqeNkwmW4g6WhJOa06a7IgpQLn7IUgjjXA6rc0uYSTcQBYBFDgeSFGsbo02vZB5aKudRLSaf/ABP0TGHxjJ7JTFZ7XHmQnymLhnPvpEyCLhDbh2uMaGfMK1xFzyOx08CtgNI7Tb81TcJtE8dwwkTTv0VbSYZymR9Crr35bdvaG43CVx72PEizlot8GaXJVcYDgAdeo1VNVqzeBKdxOLdoe7v70i4LqhGlk5tSVvBOnUymWxcRddFwnCB13ROvNc7Qp3nZW2GxwaIbB6pNVN8DaTrkv8diGtAba/5qkm4ntZDb5JB+LBEkFztQdhKFhqz3uHyGqgtPBZztnQUcOG9onVK455Blro71HiNfI1on7pOlU95Y9oHnt3FKovkZy6N4x7jlGp1lH4eJMOE9UWkGtGU3jnqFlSo1txZZvFG+w1d7WHVIYNhOYk6m3RAxJNR0C07olOkWOawHMbCIvJ5IqNIF2x6vRLhBA12Xn2M/6hllUtp0i+k12XMN41i4+q9Sdw9oIY+oQ+JLWwSPEkCV5LieBFuI/SstTL3OY/Lb3eoBtcgCIPcdCueeo1SidGnpp3uPQeDcWp4mkKtKcsxcEXAEgE2cLxIkWPIo2MYS05XAFKYB7KbGUqYIYxoa0HYAQAjjDj4s8GVZJrki3fBPBYRtjF9yrAUr7QlTX7x12UK2MAGtvzkg02wqkHxVUNtNlo1gOz+XVVWxYNp3R8JVkyRKbZgXdkfp1L2RXGdbBRpC1hAQ6ldg3SUNYao9reX1SzuIN5KD3NPhzUPe006iBsHiBBDhIB06FMUcW9kTdpvKtH4ZjgQR5JOkW0zlPabyIuFTcpKqJ7WmOB7ajZgJSqC2403H2WqjSztU7tN45IVTiDXWdbv2/hIovoZy+Q1agCA9jr+qq8bSLrjxVjhXgGNj+aolahN2m/JFPawNWjkq1I7pYsV/XqsmHiCk62EBEtMrpjP5OeUPgqnBY1HfSItCgGKhMLSc9xDRv0V5hstITq/foq2lWYwHLrpJ+iVfWc4qMouX9i0ZKIbE1jUdJVjhnZGw0S5JYVsyXHZY2uWuI6JZK8IZOssZeT4nUoRadyjUcQ141h3LZL4x8XSpPgZtVYP3+UwBdVPHuKVm5SynUfmdDvdznaLREGY1vsnHVLytHiVOgS99QMJa4Mmm6oC4iCCGkQIJGbaQjqRW1i6cm5Iq2e17S6kX165rU2kRUY0ZgPiM+HjCssRx9lUZ6OWdYHZNzJtsNbc5N1QuxlOpILqTuUHMBbTK452lB4jgGijmptaxzSagIJiR2iM5GaDqZ5DRcEISuj6GpqRw6o7A1zWwzK7SBlOR7ZuP2kjc9b6jkl3Yw2vMeXquQrcJrEUsTSPvX5A4MJ5tuWiYzTNrb9yvcDxOiWzVz0HNgPbUYW35tm5HguvT1FFJTOTUg5NuBZfqKjv6jCboYJztXFR4bxfCPsxwc7qInulN4jGnRojuTqe78Sezb+RFuDa3qi/qQIytLj00QaFCs/Rp+issJw/ENI7IjvQlXbGX0gtHM4dt2Wdgq3GDJZsk81fjCE/Ey/RadwfN0UozSY7i2jncIJ1kklWh4LNxUgcjsma3s9bsnxkrQ4Ed3P8AM/dO5p8MCg+0QNWDLTbcLMRWDxtPqlnNUHH/ADurbEQ3k6dQt+E+CFWqh2rR3aFacShuCbaDcbbii34ZbG2x+yOOIzqL7pQhQLVnBMG9oYxrQ8Zvl9VWiQbGO5NX0UCxNFVgEneSBxT9794QXibx5I5pqGRGkC32LuYsajlqJ7kgTGq1gQsCQIW6I57ApjEYXLEkXEoBYthoOUEw1PL2ihVnkhZlWsqG3Nm3YoCWwuf9smH3II0Dr9xBj1AXSlqpfa57G4ZweJDiGi8Qdc09ACfBLqr2MbTfvVHNe0j/AHlGk6kJAj3jGASGOGYEtbcDsm55pCviM9DJQp5ROZ5aIhoBBzHrDhJ/aVP2XbSp16lV1XsUWywAwXl8gC3xG0RuSF0XEoGD7QnEVXTUAFxncCGZtOy1hb4FfPUEkn+6O9ydtEcBimtwtKozMcRTokWPYfSpPDe220uGfsu5EAzlu1wHD0sSP1FV4qvJgzJAPID+m0afwOe4XwnNiKbQ0sd7vMSXF0FhMOgj4XGOzpDir7D8Vw+FruFNgpZgA6i6Ya9urmkXcy5gjUATE20EvyfBpt8LkuMb7LYdzS7DgUqzbtLSQ15F8rhyJ3Fwb7K59k+LtfR7bO2OYv49R9UnhMe+o0FpkG8gRM3tvCr+AMjEVWEwAXk/8x6/ZVnBKSa7JRm2mn0duOKbNamsPiXu29Erh8oH8wm2Yi1tOa0kukFN9sbY528IvvLaqtFbMCR5m/oEq7EumGyT108kqhYXOi7Fff5qP65vMeaqa9AOANSo4nWBp/CI2hTj4fmUdiBuYu5iG5i4PhH/AFBqSG1aYqf3DsO6GNNfmupwvtJQewvJLYNwR6iCZHcrR9RB9kJaMl0WGRFpUGGcxhCoYuk/4KjHdzgVtlVjpyuaY1ggxHNV3JrDJ1XKNYig0fC6fBLFiYzNzZZGbWN1ssRTAxUsUSxNmmommmsUVLFENTZYoGmtZhUsRaNSLESEQ01rIs8hToFXOYzCCWJrItZFkZ5Fci0WJrItZFrAK5FR+1/EWUKMvGbMS0NtqWm8HYfVdLkXGcWxNB4e+vLcxcKLwM0BuWQO0Bzm2rlz+pmlCn2dHpovfuXRVV8Zg30WClTD61KKdJpGWX1ILnZdCBDiJ305rPaGg84WlUFZheRTa3RtQ6RmBJk9uo4uMW81WcRxNB1Sm3DiG9htmy59TLDjfUfBN5JE6621H2LxNR94o9ovdUe4OcTpTawMJMNG5I+LouWnJ4R1WorLLn2YYHFlV3aPuQydJMU5IO92nzTnFuAUq72vePhBEWhw2BMTYzbqUKlwR2EpjPV9+zML5S3JlLSwfETlka7WXQ4HFUCzO94YBqHEbX8RbbmqaclFOGoS1IuTUoCeHwraVMxAa0TA0AAiAPzVIexGCfWNauLDNkb1i7iPMJXj3EjjKpwuDBDZGepswc3X8m6ldzwY0sNRZQptORjYGkncuPMkkk9Sm3OclKKwgbVCLUnlmf6RUN8wKDicLUbAMHlCsX8V5BC/1AGMzZP5oqJ6naJvZ0wFDDVy2QIG14S1QVGm8+N1at4tGjfVCdjA7VseqKcrygPbWGVrKzhutOe43JKtmFm0T1Sxpnp6J1JfAri/k4HF+yjHXa7KdbX8IGyHheBVKbCAZds4R42iR6q6GLpTem9nOHT4ws/X0f8A+jx/ubN/DdeXWrJqj7HifKONxOCrs7ORxG5HTSyAKlRh+EtkETJDoIg32EGF6DSxNJ0TXpH/AHDKfJy3R4c0ve85XAtYG5XSDlzk2m05h3qq1mgPTfZ5+zG5TDXkXje9tzOissL7SYhjwG1S7kHye+Z1V3/pOduV9NjSWtqOLAcweS4e7BdmhgEmJJNpKrMdwIMdRawh2d4a7NEtbBJ1i9o8VVa1PDFenfKGR7YVxObJ0tH3VnS9s5EnDnTZ4N+Wlh1VFjuAZKzKeVwcZcCdg0XJmN8o8TqhVeBYjNIMjp4/wqr1epGvdyRejpvlHW/93Yfs2ffXs/D3o9P2jwzp7TgBuWn0hcS/h9QQC0+vK5sg4X3jMQ1pBDXMLQYgSLxMRNlVeu1PoEfRwljJ6TRx1F4ltRpETM6AbmdFIYimZiowxrDgY77rkMskZgD/ALmgpz/TqL2//raCOUt9AqL17fQH6CuzqMiz3a40F1MFjXPYD+15201uqfjHHcTAptrmWm5tyEAkfEdZT/zCHaBH+HajeGeke7We7XldH2nxzNKgd3yfqrjGe2eIotpAtFRz6YqH4YEucIsJnspo+ug+v9Gl/Dpp0mv1/wCHcV2dl3cfkvNParhWIrVcOyi1wYKb4cfhEuJfJGhADfTVWDP+oriCH4c3Edmd+9SwftthpYajKksDgL2hxaTLRYmWi6EvUac5c/vAY+l1YReP1Kyh7OGhUwLSGmo+vmc4CDkaWuAvcCzzztfkPT/drhMN7R4erjm4h74YxhbSbBLs7rFzpgCxdp+7pfqv+6sHMGu0HkZPXaQqaWrpq8kdXQ1XXtZYmlsqqr7L4Zxk0yOge9rf+LXAJ3D8cwr/AIa9M+MfNNsxdI6VaZ7nt+6q56cuaZFQ1Y8Jr/IvhMCyk0Mpsaxo2aAB3236o2RDwnFKVRzmh0Fpy9qAHajsmb6eoTzmwCToLlPGcWsCSjJPItkWZEqeLN17Mcy6PXLAPeVZYWtRqfDUDrSQ0g252S+WI3jkuQAYpe7T7abP7j5LZaz9p80d/wBA2fZX+7W8ifa1vInxUob+31W3/Rtv2cZWwg/qFkJ/Dr7KzNEnaemqaZRAi3hdeUUT0SVHMO4NJ3Uhwp4MtM98j57LpqtJvU9+q01g2T0PuZzYwdYaZvOZ8JWCnX3aXRsQfpuunFOOi2XeKXYCl2c+GS4OqMcCG5bGRBM/CeXTmVZcMY0OzOBgC3YNzqNB806XOixt+c0q5rjq75BE2yPwNcTw9Orh/euYKRzZSS0wbwCQLwb32grhfaisaBcMrXFga6QbQ4t+Exu0kXG+y7JuYNLTUOUgcptEQekBVnFeEsrh4OQlwAl7Q74dJ57eQunUluTYPHVtCDMJOjvl5ap/CtIuSI3nb7Lk61ephn1m5s0EOynTtOGbfk4m24U8Sx+JZ2a8NMdnJG2huPsr+6ORPbLDIe03H2OJp0joYL2mNP228JXNU8x0efGCrWj7PNzEOeJBiCQJtPNGxHDctJ5pEOc0CDq0Xg7ZbdJW5Y29RWBfh+EcXNvJ3tt3cjdC9pa7TXLWloDGhl51u46A/ujwTvsPhXj3lR98xABJn4M2bwlwHgud4jwqs2qQ8Euc4mREGTMzyKdRWUT8juyTavVv/J31ape/O4j/AMgUhVw1Rsy2I5X9ZUG03G0GSj41yHzvgsqT+l//AB+4WnVWDVvoPoUrSwNV2gcecA/NOv4K9mVz+y1zg2SQS0H+ogEmENqvLA9alhAKlRpFm+cj0lOcNwji4ENIuL3Hkdu9dBQ9maLKZcX+9fHZGgLiIaABrJjUwrKlgDnALgA2xkwCQ1tr9yEZwcW10JLUk3TAU+EVM5qtIknMO0RBNyYNtZVszEYvK5r62bPMzBAHlZSN47Q6XCJkJFr+I+65V6qS4Ecd3JRs4FUDcvvWzM7wYuJHf0Wv9Ir5szqoNgNXbTaCIi6vMp0n1n5IrGBD/wBMgbSnpYbFhuQ4iWTOUk9dLaXNp66pzhz8XTENriAZAMuF+9unRPMpD948yfk1TLbDt/8Av/8AiivVal3ZvGn0QPFcbu+kORFN0+qDVxWJcSTiHCdmsho6AEpmpUtBc4gG0ie+J0UYZ+4/8f8A7Iv1mr/UDwxXRdNqBv8AgKX6kkEyfRL1K4A28lt+IBbEwTpbVA7iRxM6+aCK17JdsnW3cQpEacx/hLYGGNZ25sh1awF52SZqHYOPdfxWhY30ukcmLuYVtTNo6Z3vZYXBre0em/TZAfiwzyNun8fRBw/Ecz4ymNS7lbfqlvINyst2ubA0KmWg7QO65Um0upvtoPusd2dx0HNOdSOb9qeDOqtJYAHxH+4axrr1/BwGCZVp1wHtLSA8GxH9DrEL117y46wq/iXChVHaaJAIa7s5myNiraWrtw+CWppbsrk8ofiAHGKrtSYgx81Z8H4tFRrX1MzHnI4Fuzra6jULfH/ZSrRJdAcz9zR8xt4WXOuw/wCBdqcZrBxuMovJ6ZwSoTTqMIANN2Um/a1cSZS/CuK0axyAgGOwHGZ/tuL2n81d4M4Pw4rD4qjRmH97QWuHmF51h+E4mxbh68iCIpVLEXBFkuxSs1tHdnhjH1STTbmb/TAjtAQTAg6WKdpYNrD2WNBH9rfqNFWUMNi8RQP/AOKrSxDAJJpvp+8bt2oEO/NDZTA1OKNImlUcOT2tv42PqoamhN/ix4zo6PEMBsT3jUd8ShPLSwtcGlpbDpkwByM2PXomOHGq+1Wh7rrnpuHiM2Yeqedw+mAS4tP7ReAf3Eb/AJyvCOjqbshlPHJz/DQym1rHmasO92YgtpmwJ/uPmByvNnj6TQRAAsPt46fJRxGCpPIe6plLTOYDTvmPmmMTTbImdPv0V9R+xsSC9xXspeE6Brbj8upMpX531+nVEqYaRYEA7ifSLqIoneQANZJcdNQPmuNpsvJOuTYbBkGQBae/VFpHfWOo+SwUJB2+YsiUqUTebfx+BT2WRogXmbAeV9e5Tp0nnRp8AUTDFzXBxIDf2wCNhoBCshxFs6Ed0XVFBdhEaPDKjjqB3k28pTB4Mf3DyP3UMTiTmzNzg+F9LiZhGp8Stcf+qPRNt0zEjT/c6Pkoy0QJtHhy8lhqbx5qDaAMuIv0Men8Ji9pEn1G2hKVnxt5x90es4AaXg3B5/LT0SThJmL+iXcgXYTD1HfEYi1rapilRLjIIIjQ6zslctwBpv8Ankj+6dFh3mRynQlIxWuwVXDNNpjXmb/mypTXFNxm5Fpi0aEHlzV8cC93Jum9r+KwcDF5dJ5xECCIvvrdaKzwDZJ8FVQ4k5wcwkkTBFyW77aCHN8lcUA47hp0O5035KOE4GG1DU8BuRMTqNLfNWDMLczBFr2sRyTtFtODiss01p/iVLLzAv8AdSe2BA5bITaUT2SCbzvz0WLEHUg4c/DwvKoOJ+x1GpJYDTcb9n4Z/wBv2hdIGVOvppdDDo3/APG/mRrHqim1wBpPkoOC8Kfh6LmEgw8ubGg7Mx5g+a5f/ufFuj4bzEMN41iSZjovSxXcLGDrqJsdJkRotNaNg0EWsAPUBdHmpfZDxW/o82/1bGuJbmgiJGVgInmCLJhjcc63vvJzfkwEr0IRMxfuUjUCR676Q60YnnreFYt+tWp51Rv/AHZRC1U9ja7mySS7XtEARGghzpJtqQvQTVWveHl5/RDzSD4onE8LwlRjMtWrUBBn3bnOkgRAaHHKRZdPg8bTeLtc3lmEeungrB9IPEOaCOR09VocPbEDM3oHGO6DIhBz3cm2JEH4MbSJ6W9EvUwT4jUHu+qssHhm0xlEnvM+U7KTnDkptJmemnyUWKwlQCY6Tl8JPVJYh5pglzSRqDlttPyPkuqbXGht+dVsvahsRN6KZyzKzXAFth3DX6fymGuO4J69xVy+lTBkNAnW2pW3C0H0tbldK4g8D+SkLnm8CBqTY+iwNnQFTxFRps45GmLkkEy7snWwt4yDokK3FnMcWtp2Fh16676+KOyweNJXJlnVxbZDTprqeU8pOvhZS/WjQNg6CeevlHLmlKtIPMxHMg9dO77KLzEQZHwxrYb62NymkBpphqzza87kx4eKaweFFi6RyGs7pJjgXEG9rnkNdtNSm3TAy3BG1vzfdLQU+yBZldAFtp6WupmttMW1ufTmtPrGQS2RoDJ8j/hbwsf25p1iezEQZEDbdJWRaTY/TByjLPZnMXRr3bAAEeSOyrmuI0sRB05nZU9Cs7MGtYQLTGUTcAmAVfUsO1oAbMa2sD38+eipEtBkCw9/50UHtjUCem5+3enxpoZKFlA1TUUsBTa42AA6Qp1JG/j06+vyUzUv0iFqe4rGBCSbTpp3aRyUP07tYAnmZRCJImbGdYHLx10Wb3v/AI3WCC9wBc/dCNC8j/Ccy/U+Wuu61m/AOaxhd1PnbzWGj3Ir/P8ANVP3cgWMrGBe6A3QmVJsInvAUjRDZgxJ3vefRQbJsTblNu6PErGJNeddul1vMehU/c5Rtr5ATbSP8KdOh4Dl1QCDdWA1t1UIm4cZ8D9EU0BM5RP5ZDdUgxfyt56LWYg4u6ddvutk9O9bqPI1MHrAHQKlGMe0AOzBujTMuJOx59+t0LElJIfx2PyEANkz3T0HVK13gkOOYmcoaTImNDAgd/TVE9/aS25EEn6nx7tUlg8MxhDW32Am8DWxjTptGuqwyjeWQxdPNBdJg2ElobNtN+8yq53Ayb5R4uv4w9vyCv2U2kwRlNtLHnrySeJwVTMcuYjm2plGl4EGL9VoyaHlFPoM0iwuQb25zc+vRb4gym1mYNJN9hfkO/5wkXOLTLZ7IIOwEi6niy5w1jkOc6ym5OW01TAYV4c82gi5AEyDpbrB6hMHFODnN13iRbaL9CO5C4fQhziXZSQJaZObmHE8psOUjkm3YWXwIIDoMxEHqNtUHQu34MOIzOAPzA0I/nTkVKjTBzEm4GgFovAEDWIUaWADiQW9txMaTDeXMXC097GzMtjXWOdutz5JWqEkqLfhVRpAtEakmT0uJjn5K2a5oHZv1E2Not4+i45vFWsOZjtDDpFtbi4tsVd0OKy0PzNG5kdohtuyG6meX0Rix9OcaounE7cufj9/RRLwO878tUp+ua5pdIBiSNHXHI3GoW6+KAAPaLTcQM1o+Say9oIGczPyW6jLW8LrVIzFzzjTbRScyNTf7dPFYYEARIufw7rZb+7bTr3KbSfwKQaJuNu9Y1As351WnUySI2MyLQY19VP3fL5IgEa+kBZIzYJzButh0WCm4zt5obmE+WqNC2QeFBluvdNuaI2md5lHFGNbfnVYwBh3mxuI5R/lSLxE3tbl0vO33RSzutqYi195g7KXvgNAXHTSOW/egYCaTyLdxJIi3RQdUDIIN98th48jrfvU8W+SM1pNo+p23StR4BIi0lva2i2nK+qFjVZCs8vtaNY2N+nidfkkCxrP6RfcRJN9N/G/en6tS+sC0WEd/Pl/CQdUGYud8DTyIjQeOp5RbXVCx0jdWg7Yi40kEiJGumvfMoOHwkuJFgGjWI8Gk3200hbx7X1INN+QyHi0ggA2PIaH0TOEpODJeQXRMDQnQGIHiOiAUbbRAbJEwTBIm0mTA2voih1P97f+f8qLmwC0Ec+Wpk6+N+qGI/ZOt+ze/UpRqKPFvDZiSG6g7mx15RbRGogmJNyJ0AiQdIjksWKxxsJh8GCf7iTfpG53380zgKIa5sy4kRfvAm3eOaxYlBFZHGVvd5rC17CNfHu5KtxtLOC7TUzvYctFixJIWQo7hxFLtZYeSNJiDFzabk6810+DoNFIOcATZgMAGSGkaRAgxA5LFidFNOKTwMVMHdwEDNa14DYEdqfwoYpiDyN9uciwtCxYiVqhinRgBoN+Z7lsMvEzeFixM0KmScBqB+afdSyxdYsSD0DDZ8DKkOcDWOe8LFiboSQVrJESgPqgODALkwNhNtT4rFi0mB4Gfdxyj153S7Xf0iwA5nfS+62sQfIUQxNOGAySSdDoLwI/wlWVCB2QNs14mNNB0CxYg+RoZQtUeXBxcbAkkQPLxQXVHsa5z8pAMwO/cnvWLFO7HirJfqQ50BosC64/28kOuNMo1N5tYzMxqsWLWFZA4GIc0ASASOzltPME38EbAXb2gJiTBMGBE960sRCOAQyeYzDeImbndba7KABoFtYgE//Z"
  },
  {
    name: "Off-Road Adventure",
    headerDescription: "Conquer rugged terrain in style.",
    fullDescription: "Drive through dirt paths, rocky inclines, and remote landscapes in a 4x4 or jeep.",
    features: [
      "4x4 or Jeep rentals",
      "Guided off-road trails",
      "Remote mountain & river routes",
      "Thrilling for adventure drivers"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NNq4kJ2aRZD7OivNDq0_m-K1nzzdmspZtQ&s"
  },
  {
    name: "Staycation",
    headerDescription: "Cozy escape without the long trip.",
    fullDescription: "Unwind in a scenic getaway near Tabuk—enjoy rest, good food, and peaceful surroundings.",
    features: [
      "Relaxing countryside lodges",
      "Local cuisine & wellness activities",
      "Nature walks & stargazing",
      "Perfect for short breaks"
    ],
    image: "https://images.esquiremag.ph/esquiremagph/images/2023/06/29/kalinga-mountains-airbnb-cabin-main.png"
  }
];




export { destinations, tours };