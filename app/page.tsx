import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Logo } from "@/components/logo"
import { PharmacySlideshow } from "@/components/pharmacy-slideshow"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Users,
  Award,
  Heart,
  Pill,
  Stethoscope,
  UserCheck,
  Star,
  CreditCard,
  Gift,
  Percent,
  Calendar,
  Instagram,
  ExternalLink,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AvicenaPlusWebsite() {
  const pharmacyImages = [
    "/WhatsApp Image 2025-09-27 at 16.09.02 (1).jpeg",
    "/WhatsApp Image 2025-09-27 at 16.09.02.jpeg", 
    "/WhatsApp Image 2025-09-27 at 16.09.04.jpeg",
    "/WhatsApp Image 2025-09-27 at 16.09.06.jpeg",
    "/WhatsApp Image 2025-09-27 at 16.09.08.jpeg"
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SmoothScroll />
      <ScrollToTop />

      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Logo />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#pocetna" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Početna
              </a>
              <a href="#o-nama" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                O nama
              </a>
              <a href="#loyalty" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Loyalty kartica
              </a>
              <a href="#usluge" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Usluge
              </a>
              <a href="#lokacije" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Lokacije
              </a>
              <a href="#kontakt" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Kontakt
              </a>
            </nav>

            <div className="flex items-center space-x-2">


              {/* Mobile hamburger menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden"
                    aria-label="Otvori navigaciju"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 sm:w-80">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigacija</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-6">
                    <div className="flex items-center space-x-3">
                      <Logo />
                      <div>
                        <p className="text-sm text-green-600">25 godina poverenja</p>
                      </div>
                    </div>

                    <nav className="flex flex-col space-y-4">
                      <SheetClose asChild>
                        <a
                          href="#pocetna"
                          className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                        >
                          Početna
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a
                          href="#o-nama"
                          className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                        >
                          O nama
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a
                          href="#loyalty"
                          className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                        >
                          Loyalty kartica
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a
                          href="#usluge"
                          className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                        >
                          Usluge
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a
                          href="#lokacije"
                          className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                        >
                          Lokacije
                        </a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a
                          href="#kontakt"
                          className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                        >
                          Kontakt
                        </a>
                      </SheetClose>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="pocetna" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  <Award className="h-4 w-4 mr-2" />
                  25 godina usluge
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                  Vaš pouzdan
                  <span className="text-green-600 block">zdravstveni partner</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Služimo Novi Pazar profesionalnom farmaceutskom negom, stručnim zdravstvenim konsultacijama i
                  personalizovanom uslugom već više od dve decenije.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <a href="#loyalty">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Pridruži se Loyalty programu
                  </a>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">25+</div>
                  <div className="text-sm text-gray-600">godina iskustva</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10K+</div>
                  <div className="text-sm text-gray-600">zadovoljnih kupaca</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">2</div>
                  <div className="text-sm text-gray-600">lokacije</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <PharmacySlideshow 
                images={pharmacyImages}
                autoPlay={true}
                autoPlayInterval={4000}
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nama" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">25 godina izvrsnosti</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Od 1999. godine, mi smo najpozdanija apoteka u Novom Pazaru, pružajući profesionalnu farmaceutsku negu sa
              ličnim pristupom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Stručni tim</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Licencirani farmaceuti sa decenijama kombinovanog iskustva u farmaceutskoj nezi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Briga za zajednicu</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Duboko ukorenjeni u Novom Pazaru, služimo porodicama kroz generacije sa personalizovanom negom.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Garancija kvaliteta</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Rigorozni standardi kvaliteta koji obezbeđuju bezbedne, efikasne lekove i zdravstvene proizvode.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Loyalty Card Program - Featured Section */}
      <section id="loyalty" className="py-12 sm:py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-full overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white hover:bg-white/20">
                  <Star className="h-4 w-4 mr-2" />
                  Ekskluzivne pogodnosti za članove
                </Badge>
                <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                  AvicenaPlus
                  <span className="block">Loyalty kartica</span>
                </h2>
                <p className="text-base sm:text-xl text-green-100">
                  Pridružite se hiljadama zadovoljnih kupaca i počnite da štedite na svakoj kupovini dok dobijate
                  ekskluzivne zdravstvene pogodnosti.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg shrink-0">
                    <Percent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Do 15% popusta</h3>
                    <p className="text-green-100 text-sm sm:text-base">Na sve lekove na recept i bez recepta</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg shrink-0">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Bonus poeni</h3>
                    <p className="text-green-100 text-sm sm:text-base">Zarađujte poene na svakoj kupovini</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold w-full sm:w-auto">
                <CreditCard className="h-5 w-5 mr-2 shrink-0" />
                Dobijte svoju kartu danas - besplatno je!
              </Button>
            </div>

            <div className="relative max-w-sm mx-auto lg:max-w-none w-full">
              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-8 rounded-2xl">
                <div className="bg-gradient-to-br from-white to-gray-100 p-4 sm:p-8 rounded-xl shadow-2xl text-gray-900">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-900">AvicenaPlus</h3>
                      <p className="text-green-600 font-semibold text-sm sm:text-base">LOYALTY KARTA</p>
                    </div>
                    <div className="bg-blue-600 p-2 rounded-lg shrink-0">
                      <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-base sm:text-2xl font-mono font-bold tracking-wider">**** **** **** 1234</div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Član od</p>
                        <p className="font-semibold text-sm sm:text-base">01/2024</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 uppercase">Stanje poena</p>
                        <p className="font-semibold text-green-600 text-sm sm:text-base">2,450 poena</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Naše usluge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sveobuhvatna farmaceutska nega i zdravstvene usluge prilagođene vašim potrebama
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pill className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Usluge na recept</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Brzo, precizno izdavanje lekova sa savetovanjem o lekovima i proverom interakcija.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Zdravstvene konsultacije</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Profesionalni zdravstveni saveti, pregledi lekova i konsultacije o zdravlju.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Praćenje zdravlja</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Merenje krvnog pritiska, praćenje dijabetesa i drugi zdravstveni pregledi.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Upravljanje lekovima</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Sveobuhvatni pregledi lekova, podrška za pridržavanje i praćenje bezbednosti.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="lokacije" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Naše lokacije</h2>
            <p className="text-xl text-gray-600">Dve pogodne lokacije koje služe Novi Pazar</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  AvicenaPlus Stara Iskra
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Generala Zivkovića</p>
                    <p className="text-gray-600">36300 Novi Pazar, Srbija</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <p>+381 20 123-456</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Radno vreme:</p>
                    <p className="text-gray-600">Pon-Pet: 7:00 - 20:00</p>
                    <p className="text-gray-600">Sub: 8:00 - 16:00</p>
                    <p className="text-gray-600">Ned: 9:00 - 14:00</p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="https://g.co/kgs/jzU5Cp8" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Pogledaj na Google Maps
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  AvicenaPlus Mur
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Mur br. 279</p>
                    <p className="text-gray-600">36300 Novi Pazar, Srbija</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <p>+381 20 123-789</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Radno vreme:</p>
                    <p className="text-gray-600">Pon-Pet: 8:00 - 19:00</p>
                    <p className="text-gray-600">Sub: 9:00 - 15:00</p>
                    <p className="text-gray-600">Ned: Zatvoreno</p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="https://g.co/kgs/xkmr3om" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Pogledaj na Google Maps
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Šta kažu naši kupci</h2>
            <p className="text-xl text-gray-600">Poverenje porodica širom Novog Pazara već 25 godina</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "AvicenaPlus je naša porodična apoteka već preko 15 godina. Loyalty program nam je uštedeo stotine
                  evra, a osoblje uvek pruža odličnu uslugu."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Marija Petrović</p>
                    <p className="text-sm text-gray-600">Lojalni kupac</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Farmaceuti ovde su neverovatno stručni. Uvek izdvoje vreme da objasne lekove i daju vredne
                  zdravstvene savete. Toplo preporučujem!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-600">Ahmed Hasanović</p>
                    <p className="text-sm text-gray-600">Redovan kupac</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Brza usluga, konkurentne cene, a pogodnosti loyalty programa su neverovatne. Zdravstvene konsultacije
                  su bile neprocenjive za upravljanje mojim dijabetesom."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Stefan Nikolić</p>
                    <p className="text-sm text-gray-600">Loyalty član</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Footer / Kontakt sekcija */}
      <footer id="kontakt" className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Pill className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AvicenaPlus</h3>
                  <p className="text-slate-300 text-sm">25 godina poverenja</p>
                </div>
              </div>
              <p className="text-slate-300">
                Vaš pouzdan zdravstveni partner u Novom Pazaru, pružamo profesionalnu farmaceutsku negu od 1999. godine.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Brzi linkovi</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#o-nama" className="hover:text-white">
                    O nama
                  </a>
                </li>
                <li>
                  <a href="#usluge" className="hover:text-white">
                    Usluge
                  </a>
                </li>
                <li>
                  <a href="#loyalty" className="hover:text-white">
                    Loyalty program
                  </a>
                </li>
                <li>
                  <a href="#lokacije" className="hover:text-white">
                    Lokacije
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Usluge</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Usluge na recept</li>
                <li>Zdravstvene konsultacije</li>
                <li>Upravljanje lekovima</li>
                <li>Praćenje zdravlja</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontakt informacije</h4>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +381 20 123-456
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@avicenaplus.rs
                </p>
                <p className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  Mur br. 279, Novi Pazar
                </p>
                <a
                  href="https://instagram.com/avicenaplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  @avicenaplus
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; {new Date().getFullYear()} AvicenaPlus. Sva prava zadržana. | Licencirana apoteka u Srbiji</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
