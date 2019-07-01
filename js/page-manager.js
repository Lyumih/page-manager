var createPage = (number, status = 0, note) => {
    return {
        number,
        status,
        note
    }
}

var createStatus = (id, label, color) => {
    return {
        id,
        label,
        color
    }
}

var app = new Vue({
    el: "#app",
    data: {
        statuses: [createStatus(0, 'Не в работе', 'secondary'), createStatus(1, 'В работе', 'primary'), createStatus(2, 'Готово', 'success'),
            createStatus(3, 'Нужна информация', 'warning'), createStatus(4, 'Просрочено', 'danger')
        ],
        pages: [createPage(0, 0, 'Главная страница'), createPage(1, 1, "Страница меню"), createPage(2, 2, 'Страница оплаты'), createPage(3, 3, 'Страница Истории'), createPage(4, 4, 'Страница Документы')]
    },
    computed: {
        getStatusColor(id) {
            console.log(id)
            return 'asds'
        }
    },
    methods: {
        nextStatus(page) {
            if (page.status < this.statuses.length - 1) {
                page.status++
            } else {
                page.status = 0
            }
        },
        addPage() {
            this.pages.push(createPage(this.pages.length))
        },
    },
})