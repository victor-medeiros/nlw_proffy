import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                      name="subject"
                      label="Matéria"
                      options={[
                          {value: 'Matemática', label: 'Matemática'},
                          {value: 'Qúimica', label: 'Qúimica'},
                          {value: 'Física', label: 'Física'},
                          {value: 'História', label: 'História'},
                          {value: 'Português', label: 'Português'},
                          {value: 'Geografia', label: 'Geografia'},
                          {value: 'Educação física', label: 'Educação física'},
                          {value: 'Artes', label: 'Artes'},
                          {value: 'Filosofia', label: 'Filosofia'},
                          {value: 'Sociologia', label: 'Sociologia'},
                          {value: 'Biologia', label: 'Biologia'},
                      ]}
                    />
                    <Select
                      name="week_day"
                      label="Dia da semana"
                      options={[
                          {value: '0', label: 'Domingo'},
                          {value: '1', label: 'Segunda-feira'},
                          {value: '2', label: 'Terça-feira'},
                          {value: '3', label: 'Quarta-feira'},
                          {value: '4', label: 'Quinta-feira'},
                          {value: '5', label: 'Sexta-feira'},
                          {value: '6 física', label: 'Sábado'},
                      ]}
                    />
                    <Input name="time" label="Hora" type="time" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;