export function modals() {

    const infoModal = {
        recall: {
            title: 'Обратный звонок',
            fields: ['name', 'phone']
        },
        review: {
            title: 'ОСТАВИТЬ ОТЗЫВ',
            fields: ['name', 'lastName', 'text', 'social'],
            placeholder: 'Текст отзыва'
        },
        job: {
            title: 'Оставьте данные',
            fields: ['name', 'lastName', 'text', 'phone'],
            placeholder: 'Комментарий (опционально)'
        },
        faq: {
            title: 'Оставьте данные',
            fields: ['name', 'email', 'text'],
            placeholder: 'Текст вопроса'
        },
        video: {
            title: 'Обзор станка',
            fields: ['iframe'],
        }
    }

    function setFields(modal, config) {
        const modalFields = modal.find('._d-none')
        const btn = modal.find('.btn')
        const span = modal.find('span')
        const iframe = modal.find('iframe')
        const fields = config.fields
        modal.find('label').addClass('_d-none')
        iframe.addClass('_d-none')
        $.each(modalFields, (key, field) => {
            const type = $(field).attr('data-inputType')
            if (type) {
                $.each(fields, (keyF, fieldName) => {
                    console.log(fieldName)
                    if (fieldName != 'iframe') {
                        span.removeClass('_d-none')
                        btn.removeClass('_d-none')
                        if (type == fieldName) {
                            if (type == 'text') {
                                $(field).find('textarea').attr('placeholder', config.placeholder)
                            }
                            $(field).removeClass('_d-none')
                        }
                    } else {
                        iframe.removeClass('_d-none')
                        span.addClass('_d-none')
                        btn.addClass('_d-none')
                    }
                })
            }
        })
    }

    function setModalProperties(modal, type) {
        const config = infoModal[type]
        const header = modal.find('.modal-title')
        header.text(config.title)
        setFields(modal, config)
    }

    $('.btn[data-modal]').on('click', function () {
        const modal = $('#exampleModal')
        const type = $(this).attr('data-modal')

        setModalProperties(modal, type)
        modal.modal('show')
    })
}
