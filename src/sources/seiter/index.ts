import { runner } from '../../services/runner'
import selectors from './selectors'

const filter = 'seiter'

export const runSeiter = async (page) => {
  await runner(
    page,
    selectors,
    'seiter',
    filter,
    `https://www.seiterimobiliaria.com/alugar/sc/florianopolis/itacorubi_santa-monica_trindade_agronomica_corrego-grande_lagoa-da-conceicao_campeche/casa/dormitorios-2/suites-1/vagas-1/ordem-valor/resultado-crescente/quantidade-12/`,
  )
}