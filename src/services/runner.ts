import { scraper } from '../services/engine'
import sourceManager from '../setup/sources'
import { sleep } from '../utils/bundle'
import constants from '../utils/constants'
import { applyVariation } from '../utils/time'

export const runner = async (page, selectors, source, filter, url, ui) => {
  // const currentSource = sourceManager[source]

  try {
    console.log(`Starting ${source} - ${filter.label}`)
    ui.source.currentFilter.index = filter.index
    ui.source.currentFilter.label = filter.label

    ui.draw()

    await scraper(page, source, filter, url, selectors, ui)

    // console.log(`Completed ${source} - ${filter.label}`)
  } catch (e) {
    // console.log(`Failed ${source} - ${filter.label}`, e)
  }

  const sleepDuration = applyVariation(constants.WAIT, constants.WAIT_VARIATION)

  await sleep(sleepDuration)
}
