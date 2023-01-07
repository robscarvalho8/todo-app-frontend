import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Column, Input, List, Row, Text, Logo, Icon } from '../components';
import { useTodo } from '../hooks/useTodo';

const SECONDS_DEFAULT = 2;

export const Home = () => {
    const { tasks, getAllTodos, createTodo, updateTodo, deleteTodo } = useTodo();
    const [taskName, setTaskName] = useState('');
    const [seconds, setSeconds] = useState(SECONDS_DEFAULT);
    const [timer, setTimer] = useState<any>();
    const [stage, setStage] = useState('Ready');
    const [taskIndex, settaskIndex] = useState(0);

    const handleOkButton = useCallback(async () => {
        await createTodo({ task: taskName, isDone: 0 });
        await getAllTodos();
        setTaskName('');
    }, [createTodo, taskName]);

    const secondsToTime = (secs: number) => {
        const divisorMinute = secs % 3600;
        const minutes = Math.floor(divisorMinute / 60);
        const seconds = Math.ceil(divisorMinute % 60);

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const startTimer = () => {
        setStage('in_progress');
        const timerInterval = setInterval(() => {
            setSeconds((previousSeconds) => {
                if (previousSeconds === 0) {
                    clearInterval(timerInterval);
                    setTimer(undefined);
                    setStage('finished');
                    return 0;
                }
                return previousSeconds - 1;
            });
        }, 1000);

        setTimer(timerInterval);
    };

    const handlePauseButton = useCallback(() => {
        clearInterval(timer);
        setTimer(undefined);
    }, [timer]);

    const handleStopButton = useCallback(() => {
        setStage('ready');
        handlePauseButton();
        setSeconds(SECONDS_DEFAULT);
    }, [handlePauseButton]);

    const handleRestartButton = useCallback(() => {
        setStage('ready');
        clearInterval(timer);
        setTimer(undefined);
    }, [timer]);

    const handleDoneButton = useCallback(async () => {
        const task = tasks[taskIndex];
        if (task) {
            await updateTodo(task.id, { task: task.task, isDone: 1 });
            await getAllTodos();
        }
    }, [taskIndex, tasks, updateTodo, getAllTodos]);

    const handleStageStatus = useMemo(() => {
        switch (stage) {
            case 'ready':
                return 'Ready';

            case 'in_progress':
                return 'Time to work!';

            case 'finished':
                return 'Finished!';

            default:
                return 'Ready';
        }
    }, [stage]);

    const handleStageButtons = useMemo(() => {
        switch (stage) {
            case 'ready':
                return (
                    <Fragment>
                        <Button variant="primary" onClick={startTimer}>
                            <Text fontFamily="secondary" fontSize="bodyExtraLarge" fontWeight="bold" color="primary">
                                START
                            </Text>
                        </Button>
                    </Fragment>
                );

            case 'in_progress':
                return (
                    <Fragment>
                        <Row py="20px">
                            <Button variant="primary" p="10px 20px" mx="5px" onClick={startTimer}>
                                <Icon variant="play"></Icon>
                            </Button>

                            <Button variant="primary" p="10px 20px" mx="5px" onClick={handlePauseButton}>
                                <Icon variant="pause"></Icon>
                            </Button>

                            <Button variant="primary" p="10px 20px" mx="5px" onClick={handleStopButton}>
                                <Icon variant="stop"></Icon>
                            </Button>
                        </Row>
                    </Fragment>
                );

            case 'finished':
                return (
                    <Fragment>
                        <Row py="20px">
                            <Button variant="primary" p="10px 20px" mx="5px" onClick={handleRestartButton}>
                                <Icon variant="restart"></Icon>
                            </Button>

                            <Button variant="primary" p="10px 20px" mx="5px" onClick={handleDoneButton}>
                                <Icon variant="done"></Icon>
                            </Button>
                        </Row>
                    </Fragment>
                );

            default:
                return (
                    <Fragment>
                        <Button variant="primary" onClick={startTimer}>
                            <Text fontFamily="secondary" fontSize="bodyExtraLarge" fontWeight="bold" color="primary">
                                START
                            </Text>
                        </Button>
                    </Fragment>
                );
        }
    }, [handlePauseButton, handleStopButton, handleRestartButton, handleDoneButton, stage]);

    useEffect(() => {
        getAllTodos();
    }, [getAllTodos]);

    return (
        <Column width="600px" margin="0 auto">
            <Column width="100%" py="25px" alignItems="center">
                <Logo></Logo>
            </Column>

            <Column
                width="100%"
                minHeight="300px"
                p="20px"
                bg="rgba(255,255,255, 0.2)"
                borderRadius="4px"
                alignItems="center"
            >
                <Text fontFamily="secondary" fontSize="bodyExtraLarge" fontWeight="bold">
                    {handleStageStatus}
                </Text>
                <Text fontFamily="secondary" fontSize="displayExtraLarge" fontWeight="bold" py="30px">
                    {secondsToTime(seconds)}
                </Text>
                {handleStageButtons}
            </Column>
            <Text fontWeight="bold" fontSize="bodyLarge" my="10px" pl="10px">
                Tasks
            </Text>
            <Row width="100%">
                <Input
                    flex={1}
                    placeholder="Enter a task name here..."
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <Button onClick={handleOkButton}>OK</Button>
            </Row>
            <List items={tasks} selectedIndex={taskIndex} onClick={settaskIndex} />
        </Column>
    );
};
