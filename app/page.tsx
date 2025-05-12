import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Home, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import AnimatedSection from "@/components/animated-section"
import ParallaxHero from "@/components/parallax-hero"
import ScrollProgress from "@/components/scroll-progress"
import AnimatedCard from "@/components/animated-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* About Section */}
      <AnimatedSection id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mí</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg">
              Soy un desarrollador Full Stack Junior con pasión por crear aplicaciones web modernas y eficientes. Mi
              experiencia abarca tanto el desarrollo frontend como backend, utilizando tecnologías como React, Next.js,
              Node.js y bases de datos SQL/NoSQL.
            </p>
            <p className="text-lg">
              Me encanta resolver problemas complejos y aprender nuevas tecnologías. Busco constantemente mejorar mis
              habilidades y mantenerme actualizado con las últimas tendencias en desarrollo web.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>

          <Tabs defaultValue="frontend" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Herramientas</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="mt-6">
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="HTML5" level={90} />
                <SkillBadge name="CSS3" level={85} />
                <SkillBadge name="JavaScript" level={85} />
                <SkillBadge name="TypeScript" level={75} />
                <SkillBadge name="React" level={80} />
                <SkillBadge name="Next.js" level={75} />
                <SkillBadge name="Tailwind CSS" level={85} />
                <SkillBadge name="Responsive Design" level={90} />
              </div>
            </TabsContent>
            <TabsContent value="backend" className="mt-6">
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Node.js" level={80} />
                <SkillBadge name="Express" level={75} />
                <SkillBadge name="MongoDB" level={70} />
                <SkillBadge name="PostgreSQL" level={65} />
                <SkillBadge name="RESTful APIs" level={80} />
                <SkillBadge name="GraphQL" level={60} />
                <SkillBadge name="Firebase" level={70} />
              </div>
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Git" level={85} />
                <SkillBadge name="GitHub" level={85} />
                <SkillBadge name="VS Code" level={90} />
                <SkillBadge name="npm/yarn" level={80} />
                <SkillBadge name="Figma" level={65} />
                <SkillBadge name="Jest" level={70} />
                <SkillBadge name="Docker" level={60} />
                <SkillBadge name="CI/CD" level={65} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos Destacados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce App"
              description="Tienda online completa con carrito de compras, pagos y panel de administración."
              image="/placeholder.svg?height=200&width=400"
              tags={["React", "Node.js", "MongoDB", "Stripe"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              index={0}
            />

            <ProjectCard
              title="Task Manager"
              description="Aplicación para gestionar tareas con autenticación de usuarios y notificaciones."
              image="/placeholder.svg?height=200&width=400"
              tags={["Next.js", "TypeScript", "Firebase", "Tailwind"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              index={1}
            />

            <ProjectCard
              title="Blog Personal"
              description="Blog con sistema de gestión de contenidos, comentarios y análisis de tráfico."
              image="/placeholder.svg?height=200&width=400"
              tags={["React", "Express", "PostgreSQL", "JWT"]}
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              index={2}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <AnimatedCard delay={0.1}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Desarrollador Web Junior</CardTitle>
                    <CardDescription>Empresa Tecnológica S.A.</CardDescription>
                  </div>
                  <Badge>2023 - Presente</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Desarrollo de interfaces de usuario con React y Next.js</li>
                  <li>Implementación de APIs RESTful con Node.js y Express</li>
                  <li>Colaboración en equipo utilizando metodologías ágiles</li>
                  <li>Optimización de rendimiento y experiencia de usuario</li>
                </ul>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Pasante de Desarrollo</CardTitle>
                    <CardDescription>Startup Innovadora</CardDescription>
                  </div>
                  <Badge>2022 - 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Asistencia en el desarrollo frontend con HTML, CSS y JavaScript</li>
                  <li>Mantenimiento de bases de datos y sistemas de backend</li>
                  <li>Participación en reuniones de planificación y revisión</li>
                  <li>Aprendizaje de buenas prácticas de desarrollo y control de versiones</li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Educación</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <AnimatedCard delay={0.1}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Ingeniería en Sistemas Computacionales</CardTitle>
                    <CardDescription>Universidad Tecnológica</CardDescription>
                  </div>
                  <Badge>2019 - 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Formación completa en ciencias de la computación, algoritmos, estructuras de datos y desarrollo de
                  software.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Bootcamp de Desarrollo Web Full Stack</CardTitle>
                    <CardDescription>Academia de Programación</CardDescription>
                  </div>
                  <Badge>2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Programa intensivo de 12 semanas enfocado en tecnologías web modernas, incluyendo React, Node.js, y
                  bases de datos.
                </p>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>

          <div className="max-w-md mx-auto">
            <AnimatedCard delay={0.1}>
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y me pondré en contacto contigo lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="Tu mensaje" rows={4} />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> Enviar Mensaje
                </Button>
              </CardFooter>
            </AnimatedCard>

            <div className="mt-8 flex flex-col space-y-4">
              <div className="flex items-center hover:translate-x-1 transition-transform">
                <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>email@example.com</span>
              </div>
              <div className="flex items-center hover:translate-x-1 transition-transform">
                <Phone className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>+1 (234) 567-8901</span>
              </div>
              <div className="flex items-center hover:translate-x-1 transition-transform">
                <Home className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
