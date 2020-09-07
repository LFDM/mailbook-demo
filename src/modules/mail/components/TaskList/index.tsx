import { assertNever } from 'assert-never';
import { MjmlSection } from 'mjml-react';
import * as React from 'react';
import {
  ITaskDenormalized,
  SubTaskDenormalized
} from '../../../../domainTypes/experience';
import { toMoment } from '../../../../services/time';
import { TOPICS } from '../../../experiences';
import { toRedirectUrl } from '../../../redirect/service';
import { Link } from '../Link';
import { Text } from '../Text';

const FORMAT = 'MMM DD, YYYY';

export const SubTask = ({
  experienceId,
  taskId,
  s
}: {
  experienceId: string;
  taskId: string;
  s: SubTaskDenormalized;
}) => {
  if (s.type === 'VISIT') {
    return (
      <Text>
        Visit this link:{' '}
        <Link
          href={toRedirectUrl(s.data.url, {
            topic: TOPICS.subTask.visit,
            payload: {
              e: experienceId,
              t: taskId,
              s: s.id
            }
          })}
        >
          {s.data.label}
        </Link>
      </Text>
    );
  }

  return assertNever(s.type);
};

export const SubTaskList = ({
  experienceId,
  taskId,
  subTasks
}: {
  experienceId: string;
  taskId: string;
  subTasks: SubTaskDenormalized[];
}) => {
  return (
    <>
      {subTasks.map((s) => (
        <SubTask key={s.id} experienceId={experienceId} taskId={taskId} s={s} />
      ))}
    </>
  );
};

export const Task = ({ t, tz }: { t: ITaskDenormalized; tz: string }) => {
  const start = toMoment(t.start).tz(tz);
  const end = toMoment(t.end).tz(tz);
  return (
    <MjmlSection>
      <Text>{t.title}</Text>
      <Text>{t.description.t}</Text>
      <Text>
        {start.format(FORMAT)} - {end.format(FORMAT)}
      </Text>
      <Text>{t.status}</Text>

      <SubTaskList
        subTasks={t.subTasks}
        experienceId={t.experienceId}
        taskId={t.id}
      />
    </MjmlSection>
  );
};

export const TaskList = ({
  tasks,
  tz
}: {
  tasks: ITaskDenormalized[];
  tz: string;
}) => {
  return (
    <>
      {tasks.map((t) => (
        <Task key={t.id} t={t} tz={tz} />
      ))}
    </>
  );
};
