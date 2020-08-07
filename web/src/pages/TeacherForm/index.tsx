import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    const history = useHistory();
    
    function addNewSchedule() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (position === index) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Aula cadastrada com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro.')
        });
    }
    
    return (
        <div id="page-teacher-form">
            <PageHeader 
              title="Que incrível que você quer dar aulas"
              description="O primeiro passo é preencher esse formulário"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input 
                        name="name"
                        label="Nome completo"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        />
                        <Input
                        name="avatar"
                        label="Avatar"
                        onChange={e => setAvatar(e.target.value)}
                        value={avatar}
                        />
                        <Input
                        name="whatsapp"
                        label="Whatsapp"
                        onChange={e => setWhatsapp(e.target.value)}
                        value={whatsapp}
                        />
                        <Textarea
                        name="bio"
                        label="Biografia"
                        onChange={e => setBio(e.target.value)}
                        value={bio}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                        name="subject"
                        label="Matéria"
                        onChange={e => setSubject(e.target.value)}
                        value={subject}
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
                        <Input
                        name="cost"
                        label="Custo da sua hora por aula"
                        onChange={e => setCost(e.target.value)}
                        value={cost}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewSchedule}>+ Novo horário</button>
                        </legend>

                        { scheduleItems.map((scheduleItem, index) => (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                name="week_day"
                                label="Dia da semana"
                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                value={scheduleItem.week_day}
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
                                <Input
                                  name="from"
                                  label="De"
                                  type="time"
                                  onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                  value={scheduleItem.from}
                                />
                                <Input
                                  name="to"
                                  label="Até"
                                  type="time"
                                  onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                  value={scheduleItem.to}
                                />
                            </div>
                        )) }
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>

                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;