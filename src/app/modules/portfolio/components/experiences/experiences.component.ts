import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'ZUP | Set 2020 - Present',
      },
      text: '<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, TypeScript, Angular 2+, Angular Material e NgRx, e Back-end, onde o NodeJs é aplicado em Provas de Conceito, caso necessário.</p> <p>Além disso, minha experiência abrange a integração com Micro Serviços, Docker, GitLab, Jira e Scrum. Atualmente, enfrento o desafio significativo de contribuir para o desenvolvimento do Open Finance para o Banco Itaú, alcançando sucesso ao implementar a ferramenta em conformidade com os marcos regulatórios.</p> <p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando Angular, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Everis | Out 2019 - set 2020',
      },
      text: '<p>Durante meu período na Everis de outubro de 2019 a setembro de 2020, atuei como Analista de Sistema, liderando e desenvolvendo equipes.</p> <p>Minhas responsabilidades no front-end incluíram o uso de Html5, Css3, Javascript, TypeScript, Angular, Angular Material e NgRx, enquanto no back-end, trabalhei com NodeJs (Express/NestJs), Sequelize/TypeOrm, MongoDb, MariaDb e Redis.</p> <p>Além disso, liderei integrações com Micro Serviços, Jenkins, Gcloud, Kubernetes e Docker, utilizando ferramentas como GitLab, Jira e Scrum.</p> <p>Durante esse período, enfrentei e superei desafios significativos, destacando-se o desenvolvimento de um ChatBot.</p> <p>Como resultado, fui promovido a Líder da Squad Fullstack Angular/NodeJs, conduzi melhorias contínuas em um sistema legado e aprimorei minhas habilidades nos processos do GitFlow.</p>',
    },
    {
      summary: {
        strong: 'Consultor Web',
        p: 'Consultor Web | Set 2018 - Set 2019',
      },
      text: '<p>Em minha jornada como consultor web, tive a oportunidade de ser a ponte para várias empresas embarcarem no universo online.</p> <p>Por meio de projetos cuidadosamente elaborados, explorei o vasto espectro do desenvolvimento front-end, utilizando Html5, Css3, Javascript, TypeScript, Angular e Angular Material.</p> <p>Nos bastidores, no back-end, construí robustas infraestruturas com NodeJs (Express/NestJs), Sequelize/TypeOrm e integrações eficientes com bancos de dados MySql/Postgress.</p>',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'MKTEW21 |  Set 2016 - Set 2018',
      },
      text: '<p>Minha jornada na empresa mktew21 foi um verdadeiro mergulho no mundo fullstack, onde absorvi conhecimentos em diversas tecnologias.</p> <p>Foi um período de aprendizado intenso no desenvolvimento end-to-end, abrangendo a criação de aplicativos híbridos, desktop e web.</p> <p>E nesse cenário dinâmico que tomei a decisão de direcionar meu foco para as tecnologias NodeJs, TypeScript e Angular.</p> <p>No front-end, explorei as ferramentas Html5, Css3, Javascript, TypeScript, Angular e Angular Material, enquanto nos bastidores, no back-end, estive envolvido com NodeJs (Express), Sequelize, Laravel (PHP) e integrações com bancos de dados MySql/Postgress.</p>',
    },
    {
      summary: {
        strong: 'Decolar.com Front-end',
        p: 'Decolar.com | Set 2014 - Set 2016',
      },
      text: '<p>Durante minha passagem pelo Decolar.com, dediquei-me intensamente à criação e atualização de páginas de vendas, além de colaborar com o departamento de Recursos Humanos na implementação de um sistema de gestão de vagas.</p> <p>Extendendo minha contribuição a diversos setores, como marketing, vendas, entre outros, empreguei as tecnologias da época no desenvolvimento, incluindo Html5, Css3, Javascript, Jquery e AngularJS no front-end, e PHP no back-end.</p>',
    },
    {
      summary: {
        strong: 'EW21 Front-end',
        p: 'EW21 | Mar 2013 - Set 2014',
      },
      text: '<p>No ew21, marco inicial da minha trajetória profissional, mergulhei em um aprendizado abrangente que englobava não apenas front-end, design e backend, mas também incluía domínio em tecnologias como Flash e muito mais.</p> <p>Essa empresa se revelou uma verdadeira escola inicial, onde absorvi conhecimentos variados. No front-end, desenvolvi habilidades com Html5, Css3, Javascript, Jquery e Wordpress, enquanto no back-end, explorei PHP, Cake (PHP) e integrações com bancos de dados MySql.</p>',
    },
  ]);
}
