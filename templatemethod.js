class AbstractDownload {
  constructor() {}

  buildParameters() {
    throw new Error(
      'a subclass which has AbstractDownload as parent, should implement the buildParameters method'
    )
  }
  download() {
    console.log('download')
    const parameters = this.buildParameters()
    console.log('parameters', parameters)
  }

  execute() {
    console.log('execute')
    this.download()
  }
}

class GroupDownload extends AbstractDownload {
  constructor() {
    super()
  }
  buildParameters() {
    return {
      url: '/group',
      parameters: {
        type: 'group'
      }
    }
  }
}

class StudyDownload extends AbstractDownload {
  buildParameters() {
    return {
      url: '/study',
      parameters: {
        type: 'one'
      }
    }
  }
}

class QuestionDownload extends AbstractDownload {
  buildParameters() {
    return {
      url: '/question',
      parameters: {
        type: 'all'
      }
    }
  }
}

const question = new QuestionDownload()
question.execute()

const group = new GroupDownload()
group.execute()

const study = new StudyDownload()
study.execute()
