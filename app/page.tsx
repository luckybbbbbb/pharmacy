import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ThemeToggle } from "@/components/theme-toggle"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AvicenaPlusWebsite() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />

      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Pill className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">AvicenaPlus</h1>
                <p className="text-sm text-green-600">25 godina poverenja</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#pocetna" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Početna
              </Link>
              <Link href="#o-nama" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                O nama
              </Link>
              <Link href="#loyalty" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Loyalty karta
              </Link>
              <Link href="#usluge" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Usluge
              </Link>
              <Link href="#lokacije" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Lokacije
              </Link>
              <Link href="#kontakt" className="text-foreground hover:text-blue-600 font-medium transition-colors">
                Kontakt
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="#loyalty">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Dobij Loyalty kartu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="pocetna" className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800">
                  <Award className="h-4 w-4 mr-2" />
                  25 godina profesionalne usluge
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 dark:text-blue-100 leading-tight">
                  Vaš pouzdan
                  <span className="text-green-600 dark:text-green-400 block">zdravstveni partner</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Služimo Novi Pazar profesionalnom farmaceutskom negom, stručnim zdravstvenim konsultacijama i
                  personalizovanom uslugom već više od dve decenije.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <Link href="#loyalty">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Pridruži se Loyalty programu
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 px-8 py-4 text-lg bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Pozovi sada
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">godina iskustva</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">10K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">zadovoljnih kupaca</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">lokacije</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Profesionalna apoteka"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Licencirani i sertifikovani</div>
                    <div className="text-sm text-gray-600">Profesionalni farmaceuti</div>
                  </div>
                </div>
              </div>
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
      <section id="loyalty" className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white hover:bg-white/20">
                  <Star className="h-4 w-4 mr-2" />
                  Ekskluzivne pogodnosti za članove
                </Badge>
                <h2 className="text-5xl font-bold leading-tight">
                  AvicenaPlus
                  <span className="block">Loyalty karta</span>
                </h2>
                <p className="text-xl text-green-100">
                  Pridružite se hiljadama zadovoljnih kupaca i počnite da štedite na svakoj kupovini dok dobijate
                  ekskluzivne zdravstvene pogodnosti i personalizovanu negu.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Percent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Do 15% popusta</h3>
                    <p className="text-green-100">Na sve lekove na recept i bez recepta</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Bonus poeni</h3>
                    <p className="text-green-100">Zarađujte poene na svakoj kupovini</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Prioritetna usluga</h3>
                    <p className="text-green-100">Preskočite red sa ekspresnom uslugom</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Zdravstveni podsetnici</h3>
                    <p className="text-green-100">Obaveštenja o lekovima i pregledima</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <CreditCard className="h-5 w-5 mr-2" />
                Dobijte svoju kartu danas - besplatno je!
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-xl shadow-2xl text-gray-900">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">AvicenaPlus</h3>
                      <p className="text-green-600 font-semibold">LOYALTY KARTA</p>
                    </div>
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-2xl font-mono font-bold tracking-wider">**** **** **** 1234</div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Član od</p>
                        <p className="font-semibold">01/2024</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Stanje poena</p>
                        <p className="font-semibold text-green-600">2,450 poena</p>
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
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Profesionalne usluge</h2>
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
                  AvicenaPlus Centar
                </CardTitle>
                <CardDescription>Glavna lokacija</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Trg Slobode 15</p>
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
                  AvicenaPlus Express
                </CardTitle>
                <CardDescription>Druga lokacija</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold">Ulica Stevana Nemanje 42</p>
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

      {/* Health Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Zdravstveni saveti i vesti</h2>
            <p className="text-xl text-gray-600">Budite informisani sa najnovijim zdravstvenim informacijama</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Zimski zdravstveni saveti"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-blue-900">Zimski zdravstveni saveti</CardTitle>
                <CardDescription>15. decembar 2024.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Osnovni saveti za održavanje zdravlja tokom zimskih meseci, uključujući podršku imunskom sistemu i
                  strategije prevencije prehlade.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  Pročitaj više
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Bezbednost lekova"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-green-600">Bezbednost lekova</CardTitle>
                <CardDescription>10. decembar 2024.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Važne smernice za bezbedno čuvanje lekova, pravilno doziranje i izbegavanje opasnih interakcija između
                  lekova.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                  Pročitaj više
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Upravljanje dijabetesom"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-blue-900">Upravljanje dijabetesom</CardTitle>
                <CardDescription>5. decembar 2024.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sveobuhvatan vodič za efikasno upravljanje dijabetesom, uključujući savete o ishrani, tehnike praćenja
                  i pridržavanje lekova.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  Pročitaj više
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Kontaktirajte nas</h2>
            <p className="text-xl text-gray-600">Obratite nam se za bilo kakva pitanja ili zdravstvene konsultacije</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Stupite u kontakt</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">Glavna lokacija</p>
                      <p className="text-gray-600">+381 20 123-456</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-600">Express lokacija</p>
                      <p className="text-gray-600">+381 20 123-789</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-900">Email</p>
                      <p className="text-gray-600">info@avicenaplus.rs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Instagram className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-pink-600">Instagram</p>
                      <Link
                        href="https://www.instagram.com/avicenaplus/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                      >
                        @avicenaplus
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Hitni kontakt
                </h4>
                <p className="text-red-700">Za hitne potrebe za lekovima van radnog vremena:</p>
                <p className="font-semibold text-red-800">+381 20 HITNO (24/7)</p>
              </div>
            </div>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Pošaljite nam poruku</CardTitle>
                <CardDescription>Odgovoriće vam u roku od 24 sata</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Ime</label>
                    <Input placeholder="Vaše ime" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Prezime</label>
                    <Input placeholder="Vaše prezime" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                  <Input type="email" placeholder="vas.email@primer.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Telefon</label>
                  <Input type="tel" placeholder="+381 XX XXX-XXX" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Poruka</label>
                  <Textarea placeholder="Kako možemo da vam pomognemo?" rows={4} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Pošalji poruku
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Pill className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AvicenaPlus</h3>
                  <p className="text-blue-200 text-sm">25 godina poverenja</p>
                </div>
              </div>
              <p className="text-blue-200">
                Vaš pouzdan zdravstveni partner u Novom Pazaru, pružamo profesionalnu farmaceutsku negu od 1999. godine.
              </p>
              <div className="flex items-center space-x-2">
                <Link
                  href="https://www.instagram.com/avicenaplus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Brzi linkovi</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#o-nama" className="hover:text-white">
                    O nama
                  </Link>
                </li>
                <li>
                  <Link href="#usluge" className="hover:text-white">
                    Usluge
                  </Link>
                </li>
                <li>
                  <Link href="#loyalty" className="hover:text-white">
                    Loyalty program
                  </Link>
                </li>
                <li>
                  <Link href="#lokacije" className="hover:text-white">
                    Lokacije
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Usluge</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Usluge na recept</li>
                <li>Zdravstvene konsultacije</li>
                <li>Upravljanje lekovima</li>
                <li>Praćenje zdravlja</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontakt informacije</h4>
              <div className="space-y-2 text-blue-200">
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
                  Trg Slobode 15, Novi Pazar
                </p>
                <p className="flex items-center">
                  <Instagram className="h-4 w-4 mr-2" />
                  @avicenaplus
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} AvicenaPlus. Sva prava zadržana. | Licencirana apoteka u Srbiji</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
